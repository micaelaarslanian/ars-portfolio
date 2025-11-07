import { getAllWorks } from "@/lib/work";
import WorkCard from "./WorkCard";


// work list component to display all works
export default function WorkList() {
    const works = getAllWorks();
    return (
        <ul className="divide-y divide-black/10 rounded-sm bg-[#FFFFF7]">
            {works.map((w, i) => (
                <WorkCard key={w.slug} work={w} />
            ))}
        </ul>
    );
}
