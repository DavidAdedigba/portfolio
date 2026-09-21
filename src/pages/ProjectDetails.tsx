import { useParams } from "react-router-dom";
import {projects} from "../../lib/data"


const liveProjeects = [
    {
        id: 1,
        title: "Landing page concept",
        link: "https://www.zenfipay.com"
    },
    {
        id: 2,
        title: "Merchant PWA",
        link: "https://www.merchant.zenfipay.com"
    },
    {
        id: 3,
        title: "Landing page",
        link: "https://www.zenfipay.com"
    },
]

const tools = [
    {
        id: 1,
        name: "TypeScript"
    },
    {
        id: 2,
        name: "TailwindCSS"
    },
    {
        id: 3,
        name: "ShadCn"
    },
    {
        id: 4,
        name: "ReactBits"
    },
    {
        id: 5,
        name: "React"
    },
    {
        id: 6,
        name: "NextJS"
    },
    {
        id: 7,
        name: "Framer Motion"
    },
    {
        id: 8,
        name: "GSAP"
    },
    {
        id: 9,
        name: "NextAuth"
    },
    {
        id: 10,
        name: "React-Redux"
    },
]

const reviews = [
    {
        id:1,
        name: "Adeyera Emmanuel",
        role: "Product Design Lead",
        review: "This is supposed to a comment, or review made by said person that attests to my character and work ethic. Short and concise."
    },
    {
        id:2,
        name: "Suleiman David",
        role: "CEO & Co-founder",
        review: "He's such a pookie pie innit!"
    },
]

function ProjectDetails() {

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
                    <p>Logo</p>
                </div>

                {/* ABOUT COMPANY */}
                <p className=" tracking-normal">
                    Zenfipay is a fintech company focused on simplifying cross-border and local payments through stablecoin-powered financial infrastructure. The platform enables businesses and individuals to send, receive, and manage payments securely across different regions, leveraging blockchain technology to provide faster settlements, reduced transaction costs, and improved accessibility. By bridging traditional finance and digital assets, Zenfipay helps merchants streamline payment operations while offering reliable and efficient financial services in emerging and global markets.
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
                    {liveProjeects.map((project) => (
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
                    {tools.map((tool) => (
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

                    {reviews.map((review) => (
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

export default ProjectDetails;