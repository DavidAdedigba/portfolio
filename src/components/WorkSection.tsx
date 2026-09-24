import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { projects } from "../../lib/data"

export default function WorkSection() {

    return (
        <section className="gap-10">

            <h2 className="">Projects With A Pulse.</h2>

            {/* <div className="flex gap-10 py-2.5 px-1 overflow-x-auto">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.slug}`} className="space-y-5">
                        <figure className="w-70 h-[350px] overflow-hidden border border-[#D8D0C0]">
                            <img
                                src=""
                                alt=""
                            />
                        </figure>
                        <article className="">
                            <h5 className="">{project.name}</h5>
                            <p className="text-[16px]">{project.role}</p>
                        </article>
                    </Link>
                ))}
            </div> */}

            <div className="">
                {projects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.slug}`} className="flex justify-between items-center border-y py-5 px-2.5">
                        <article className="flex flex-col gap-1">
                            <h5 className="">{project.name}</h5>
                            <p className="text-[16px]">Frontend Engineer</p>
                        </article>
                        <Icon icon="iconamoon:link-external-light" className="size-4" />
                    </Link>
                ))}
            </div>
        </section>
    )
}