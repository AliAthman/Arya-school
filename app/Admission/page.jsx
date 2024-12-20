
import Image from "next/image";
import Link from "next/link";

export default function AdmissionPage() {
  return (
    <div className="overflow-hidden">
      <div className="bg-[url('/element-bg.svg')] bg-cover bg-no-repeat place-content-center h-[50vh] bg-[#f9aa1f]">
        <h1 className="text-[#146e38] font-serif font-extrabold text-2xl pb-14 pl-3">ADMISSION</h1>
      </div>
      <div className="flex flex-col px-2 pt-16 w-[110vw] space-y-12 h-[100vh] md:flex md:flex-col md:w-full md:h-[40vh]  lg:px-20 lg:h-[60vh]">
        <div className="space-y-7">
          <h1 className="text-[#146e38] font-extrabold text-2xl px-1">Admission Process</h1>
          <ol className="space-y-3 list-decimal list-inside px-6">
            <li className="font-serif text-[#414f61]">
              To provide affordable quality integrated education to Muslim children in Kenya
            </li>
            <li className="text-[#414f61] font-serif">
              To produce well educated students with good Muslim character
            </li>
            <li className="text-[#414f61] font-serif">
              To provide a good learning environment that has a secure Islamic atmosphere
            </li>
            <li className="text-[#414f61] font-serif">
              To operate and manage an efficient Islamic institution on a sustainable basis
            </li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col px-2 w-[110vw] space-y-14 md:space-y-0 h-[130vh] lg:h-[50vh] lg:grid justify-center lg:grid-cols-2 lg:w-full lg:px-20 ">
        <div className="space-y-7  md:w-[700px]">
          <h1 className="text-[#146e38] font-extrabold text-2xl px-1">Admission Requirements</h1>
          <ul className="space-y-3 list-disc list-inside px-6 w-full">
            <li className="font-serif text-[#414f61]">
              To provide affordable quality integrated education to Muslim children in Kenya
            </li>
            <li className="text-[#414f61] font-serif">
              To produce well educated students with good Muslim character
            </li>
            <li className="text-[#414f61] font-serif">
              To provide a good learning environment that has a secure Islamic atmosphere
            </li>
            <li className="text-[#414f61] font-serif">
              To operate and manage an efficient Islamic institution on a sustainable basis
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center   md:pt-9 lg:items-start  lg:place-content-end lg:pt-0">
          <Image src="/book.png" width={200} height={200} alt="" />
        </div>
      </div>
      <div className="bg-[#ebf2ed] pt-9 pb-12 mb-48 md:w-screen md:mb-20 ">
        <div className="flex flex-col w-full pl-3 md:grid md:grid-rows-2 md:justify-center md:space-x-6 ">
          <div className="w-[150vw] md:w-full md:place-items-center md:place-content-center ">
            <h1 className="text-[#146e38] font-extrabold text-2xl ">Download Admission Forms</h1>
          </div>
          <div className="md:flex md:flex-row md:justify-around md:space-x-32 w-full">
          <div className="p-3 space-y-3">
            <p className="text-[#146e38] font-bold text-xl">Early Years</p>
            <button className="text-[#146e38] font-light text-sm ring-1 ring-green-600 p-1 rounded-full">
              <Link href="/">Download Application</Link>
            </button>
          </div>
          <div className="p-3 space-y-3">
            <p className="text-[#146e38] font-bold text-xl">Middle School</p>
            <button className="text-[#146e38] font-light text-sm ring-1 ring-green-600 p-1 rounded-full">
              <Link href="/">Download Application</Link>
            </button>
          </div>
          <div className="p-3 space-y-3">
            <p className="text-[#146e38] font-bold text-xl">High School</p>
            <button className="text-[#146e38] font-light text-sm ring-1 ring-green-600 p-1 rounded-full">
              <Link href="/">Download Application</Link>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
