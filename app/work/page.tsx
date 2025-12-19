import WorkList from "../components/work/WorkList";
import AnimatedPageTitle from "../components/work/AnimatedPageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work | STUDIO ARS",
};

export default function WorkPage() {
    return (
        <section className="bg-[#FFFCEA] text-[#174727]">
            <div className="mx-auto w-full max-w-[1600px] px-4 py-16 md:py-24">
                <AnimatedPageTitle>WORK</AnimatedPageTitle>
                <WorkList />
            </div>
        </section>
    );
}
