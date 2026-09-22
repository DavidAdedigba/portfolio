import { useState } from "react";

import { useParams } from "react-router-dom";
import {projects} from "../../lib/data"
import { Icon } from "@iconify/react";


export default function ProjectDetails() {

    const [ currentIndex,setCurrentIndex ] = useState<number>(0)

    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug
    );

    if(!project) {

        // NOT FOUND PAGE
        return <h1>Product not found</h1>
    }

    const nextImg = () => {

        // GO BACK TO THE BEGINNING
        // if(currentIndex === project.highlights.length - 1) {
        //     setCurrentIndex(0)
        // } else {
        //     setCurrentIndex(currentIndex + 1)
        // }

        setCurrentIndex(currentIndex + 1)
    }
    const prevImg = () => {
        setCurrentIndex(currentIndex - 1)
    }

    return (
        <main className="py-24 px-2 lg:p-32 space-y-16 lg:space-y-2">

            {/* COMPANY INFO */}
            <section className="space-y-14">

                {/* NAME AND LOGO */}
                <div className="w-full flex flex-col-reverse  md:gap-2.5 lg:flex-row lg:justify-between lg:items-center">

                    <h4 className="text-[64px] text-[#111111]">
                        {project.name}
                    </h4>
                    <figure className="w-16 rounded-md overflow-x-hidden">
                        <img
                            src={project.logoLight}
                            alt={`${project.logoLight} logo`}
                            className="w-full"
                        />
                    </figure>
                </div>

                {/* HIGHLIGHTS */}
                <article className="flex flex-col overflow-hidden">
                    <div 
                        className="w-full flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {project.highlights.map((highlight,index) => (
                            <img
                                key={index}
                                src={highlight.img}
                                alt={`highlight ${currentIndex}`}
                                className="bg-white w-full shrink-0 h-133.75"
                            />
                        ))}
                    </div>

                    {/* CONTROL */}
                    <div className=" mt-5 w-full flex justify-end gap-2.5">

                        <button
                            type="button"
                            title="prev button"
                            className=""
                            onClick={prevImg}
                            disabled={currentIndex === 0}
                        >
                            <Icon icon="grommet-icons:form-previous" className={`size-12 ${currentIndex === 0 ? "text-[#4a4a4a]" : "text-[#111111]"}`} />
                        </button>

                        <button
                            type="button"
                            title="prev button"
                            className=""
                            onClick={nextImg}
                            disabled={currentIndex === project.highlights.length - 1}
                        >
                            <Icon icon="grommet-icons:form-next" className={`size-12 ${currentIndex === project.highlights.length - 1 ? "text-[#4a4a4a]" : "text-[#111111]"}`} />
                        </button>
                    </div>
                </article>

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
                        <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-[18px] text-[#4A4A4A] hover:text-[#111111] transition-colors duration-150 ease-linear">
                            <span>
                                {project.id}. {project.title}
                            </span>
                            <Icon icon="iconamoon:link-external-light" className="size-4" />
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
                        <li 
                            key={tool.id} 
                            className="min-w-fit group flex items-center text-[18px] hover:text-[#111111] transition-colors duration-75 ease-linear cursor-default"
                        >
                            <span>{tool.name}</span>
                            <img 
                                src={tool.icon} 
                                alt={`${tool.icon} icon`} 
                                className="opacity-0 size-5 bg-violet-500 rounded-md group-hover:opacity-100 group-hover:translate-x-1 transition-transform ease-in-out rotate-12 duration-300 grayscale" 
                            />
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
                            <p className="lg:text-[13px]">{review.review}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SOCIAL MEDIA */}
            <div className="min-w-full flex flex-col gap-3.5 md:flex-row md:justify-between md:items-center px-4 md:px-19">

                <h5 className=" text-[#111111] text-[18px] tracking-normal">
                    Official Channels:
                </h5>

                <div className="">
                    <ul className="flex gap-3.5">
                        {project.socials.map((link) => (
                            <a key={link.id} href={link.link} target="_blank">
                                <img
                                    key={link.name}
                                    src={link.icon}
                                    alt={`${link.name} logo`}
                                    className="size-4.5"
                                />
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
            
        </main>
    )
}