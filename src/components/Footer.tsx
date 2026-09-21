
const year = new Date().getFullYear();

export default function Footer() {
    
    return (

        <footer className="flex justify-between px-21.5 py-10">
            <p className=" text-[#111111]">&copy; Oluwademilade {year}</p>
            <p> Designed & built by, Yours truly.</p>
        </footer>
    )
}