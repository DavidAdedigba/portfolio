import { Icon } from "@iconify/react"

export default function IntroSection() {
    
    return (

        <section className="min-h-screen gap-20 justify-evenly">

            <div className="size-10 rounded-full bg-black" />

            <div className="lg:w-4/6 flex flex-col gap-3.5 px-1.5">
                <p className="">Frontend Engineer</p>
                <h1 className="w-full">
                    Building Interfaces Worth Talking About.
                </h1>
                <p className="md:w-9/11 text-[16px] md:text-[18px]">
                    Frontend engineer by profession, perpetual learner by circumstance. I make things for the web, explore ideas that interest me, and keep a running record of what comes out of it.
                </p>
            </div>

            <button 
                type="button"
                className="w-fit flex gap-1 items-center"
                onClick={() => {}}
            >
                <span>Scroll</span>
                <Icon icon="ant-design:arrow-down-outlined" className="size-4 text-[#4a4a4a] animate-bounce transition-transform ease-linear" />
            </button>
        </section>
    )
}