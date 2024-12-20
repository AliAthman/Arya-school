import Image from "next/image"
import Contact from "@/components/contact"
export default function ContactPage(){
    return <div className="pb-20 flex flex-col ">
        <div className="bg-[url('/element-bg.svg')] bg-cover bg-center place-content-center h-[40vh] bg-[#f9aa1f]" >
<h1 className="text-[#146e38] font-serif font-extrabold text-2xl pb-14 pl-3">CONTACTS</h1>
        </div>
        <div className="sm:place-items-center md:pt-10 md:pb-24 ">
        <Contact   />

        </div>
    </div>
}

