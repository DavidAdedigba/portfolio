import { Link } from "react-router-dom"

export default function ContactSection() {
    
    return (

        <section className="section space-y-10">

            <div className="space-y-1.5">
                <h5 className="text-red-200 text-center text-4xl">Write To The Editor.</h5>
                <p className="w-3/4 lg:w-2/4 mx-auto text-[16px] text-center">
                    Have a project in mind, or just want to chat? I'm always open to interesting opportunities and conversations.
                </p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <Link to="" className="">daveadedigba@gmail.com</Link>
                <div className=" flex justify-center gap-4 ">
                    <Link to="" className="">GitHub</Link>
                    <Link to="" className="">LinkedIn</Link>
                    <span className="">Resume</span>
                </div>
            </div>
        </section>
    )
}