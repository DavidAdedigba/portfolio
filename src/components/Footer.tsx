
const year = new Date().getFullYear();

export default function Footer() {
    
    return (

        <footer className="bg-[#EFE8D8] border-t flex flex-col-reverse gap-2.5 lg:flex-row lg:justify-between px-2.5 lg:px-21.5 py-10">
            <h5 className=" text-[#111111]">&copy; Óluwadémiladé {year}</h5>
            <p> Designed & built by, Yours truly.</p>
        </footer>
    )
}