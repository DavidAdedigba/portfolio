import { useParams } from "react-router-dom";
import {projects} from "../../lib/data"


export default function ProjectDetails() {

    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug
    );

    if(!project) {

        // NOT FOUND PAGE
        return <h1>Product not found</h1>
    }

    return (
        <main className="p-32 space-y-24">

            {/* COMPANY INFO */}
            <section className="space-y-14">

                {/* NAME AND LOGO */}
                <div className="flex justify-between items-center">
                    <h4 className="text-[64px] text-[#111111]">
                        {project.name}
                    </h4>
                    <p>{project.logo}</p>
                </div>

                {/* ABOUT COMPANY */}
                <p className=" tracking-normal">
                    {project.description}
                </p>


            </section>

            {/* LINK TO PROJECTS */}
            <section className="space-y-6">

                {/* TITLE */}
                <h5 className=" text-[#111111] text-[26px] tracking-normal">
                    Work In Print.
                </h5>

                {/* PROJECTS */}
                <div className="flex flex-col gap-2">
                    {project.liveWorks.map((project) => (
                        <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="text-[18px]">
                            {project.id}. {project.title}
                        </a>
                    ))}
                </div>
            </section>

            {/* TOOLS I'VE USED */}
            <section className="space-y-6">

                {/* TITLE */}
                <h5 className=" text-[#111111] text-[26px] tracking-normal">
                    The Machinery.
                </h5>

                {/* LIST */}
                <ul className="flex flex-wrap gap-4.5">
                    {project.tools.map((tool) => (
                        <li key={tool.id} className=" text-[18px] hover:text-[#111111] transition-colors duration-75 ease-linear cursor-default">
                            {tool.name}
                        </li>
                    ))}
                </ul>
            </section>

            {/* DEVELOPMENT EXPERIENCE */}
            <section className="space-y-6">
                
                {/* TITLE */}
                <h5 className=" text-[#111111] text-[26px] tracking-normal">
                    Field Notes.
                </h5>

                {/* CONTENT */}
                <p className="py-4">
                    {project.devExperience}
                </p>
            </section>

            {/* REVIEWS */}
            <section className="space-y-6">

                {/* TITLE */}
                <h5 className=" text-[#111111] text-[26px] tracking-normal">
                    Press Clippings.
                </h5>

                {/* CONTENT */}
                <div className="space-y-5 py-4">

                    {project.reviews.map((review) => (
                        <div key={review.id} className="flex flex-col gap-1">

                            {/* NAME AND ROLE */}
                            <div className=" flex gap-px items-baseline">
                                <h5 className="text-[#111111] text-[18px]">{review.name}</h5>,
                                <span className="text-[17px]">&nbsp;{review.role}.</span>
                            </div>

                            {/* REVIEW */}
                            <p className="text-[15px]">{review.review}</p>
                        </div>
                    ))}
                </div>
            </section>

            
        </main>
    )
}