

export default function HighlightSection() {
    
    return (
        <section className="section gap-10 py-10">

            <h2>Fine Print.</h2>

            <div className="flex flex-col lg:flex-row border border-[#D8D0C0] rounded-lg">

                {/* LEFT SIDE */}
                <div className="lg:w-3/6 flex flex-col gap-4 p-4">

                    <h3 className="w-full text-center lg:text-left">marginalia</h3>

                    {/* MARGINALIA */}
                    <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-between gap-10 lg:gap-3 text-left">
                        
                        <aside className="space-y-1.5 md:w-2/6">
                            <h5 className="lg:text-[16px]">The Machinery</h5>
                            <p className="lg:text-[12px]">
                                TypeScript, TailwindCSS, React, NextJS, Framer-motion, GSAP, Redux, Git/GitHub
                            </p>
                        </aside>

                        <aside className="space-y-1.5 md:w-2/6">
                            <h5 className="lg:text-[16px]">The Apprenticeship</h5>
                            <ol className=" list-decimal lg:text-[12px] leading-normal">
                                <li>ABAT ICT Center, Ministry Of Science and Technology</li>
                                <li>HNG Internship</li>
                            </ol>
                        </aside>

                        <aside className="space-y-1.5 md:w-2/6">
                            <h5 className="lg:text-[16px]">Side Quests</h5>
                            <p className="lg:text-[12px]">
                                Backend development, Payment infrastructure, Distributed systems, Cyber-security
                            </p>
                        </aside>

                        <aside className="space-y-1.5 md:w-2/6">
                            <h5 className="lg:text-[16px]">After Hours</h5>
                            <p className="lg:text-[12px]">
                                Music, Gaming, Movies & TV Shows, Photography, Anime, Football, Tech gadgets... etc
                            </p>
                        </aside>

                        <aside className="space-y-1.5 md:w-2/6">
                            <h5 className="lg:text-[16px]">Origins</h5>
                            <p className="lg:text-[12px]">
                                Afe Babalola university, Ado-Ekiti.
                            </p>
                        </aside>

                        <aside className="space-y-1.5 md:w-2/6">
                            <h5 className="lg:text-[16px]">Byline</h5>
                            <ol className=" list-decimal lg:text-[12px]">
                                <li className="">
                                    <a href="" target="_blank">
                                        Search, seen differently.
                                    </a>
                                </li>
                            </ol>
                        </aside>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="p-4 lg:w-1/2">

                    {/* SPOTIFY CARD */}
                    <div className="bg-red-700 w-full h-[250px] rounded-sm" />
                </div>
            </div>
        </section>
    )
}