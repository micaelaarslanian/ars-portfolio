import WorkList from "../components/work/WorkList";
import AnimatedPageTitle from "../components/work/AnimatedPageTitle";

// main work page component. WORK title, worklist 
export default function WorkPage() {
    return (
        <section className="bg-[#FFFFF7] text-[#174727]">
            <div className="mx-auto w-full max-w-[1600px] px-4 py-16 md:py-24">
                <AnimatedPageTitle>WORK</AnimatedPageTitle>
                <WorkList />
            </div>
        </section>
    );
}
