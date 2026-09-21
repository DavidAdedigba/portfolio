import { Link } from "react-router-dom";
import { projects } from "../../lib/data";
import IntroSection from "../components/IntroSection";
import HighlightSection from "../components/HighlightSection";

export default function Home() {
    return (
        <main className="flex flex-col gap-20">
            <IntroSection />
            <HighlightSection />
            {projects.map((project) => (
                <div key={project.id}>
                    <Link className="font-outfit text-outfit" to={`/projects/${project.slug}`}>
                        <p>project name</p>
                    </Link>
                </div>
            ))}
        </main>
    )
}