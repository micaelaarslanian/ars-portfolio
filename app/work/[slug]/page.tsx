import { notFound } from "next/navigation";
import { getAllWorks, getWorkBySlug } from "@/lib/work";
import Link from "next/link";
import SelectedWork from "../../components/work/SelectedWork";

// generate static params for all works
export async function generateStaticParams() {
    return getAllWorks().map(w => ({ slug: w.slug }));
}

// component async and await params
export default async function WorkDetailPage({
    params,
}: {
    // params is a promise
    params: Promise<{ slug: string }>;
}) {
    // await params to get slug
    const { slug } = await params;

    // get work by slug
    const work = getWorkBySlug(slug);

    // if no work, return not found
    if (!work) return notFound();

    // return selected work component
    return (
        <section className="bg-[#FEFEFE] text-[#174727]">
            <div className="mx-auto w-full max-w-[1600px] px-4 py-8 md:py-12">

                {/* Back button */}
                <Link
                    href="/work"
                    className="
            inline-flex items-center gap-1
            text-xs font-medium tracking-wide text-[#174727]
            hover:opacity-70 transition-opacity
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174727]
          "
                >
                    <span className="text-lg">←</span> BACK TO ALL WORK
                </Link>

                {/* Page content */}
                <div className="mt-8 md:mt-12">
                    <SelectedWork work={work} />
                </div>
            </div>
        </section>
    );
}