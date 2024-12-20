import Image from "next/image"
import Table from "@/components/table"
import TransportTable from "@/components/transport-table"
export default function FeeStructure(){
    return <div className="pb-10">
        <div className="bg-[url('/element-bg.svg')] bg-cover bg-center place-content-center h-[40vh] bg-[#f9aa1f]" >
<h1 className="text-[#146e38] font-serif font-extrabold text-2xl pb-14 pl-3">FEE STRUCTURE: Early Years & Junior School</h1>
        </div>
        <div className="md:grid md:grid-cols-2 lg:h-[50vh]">
        <div className="px-3 py-9 space-y-2 w-full md:px-9">
            <h1 className="text-[#146e38] font-serif font-extrabold text-lg">ONE TIME PAYMENT</h1>
            <ul className="list-inside list-disc space-y-4">
                <li className="flex justify-between md:justify-normal md:gap-x-52">INTERVIEW CHARGES<strong>KSH 1000</strong></li>
                <li className="flex justify-between md:justify-normal md:gap-x-36">ADMISSION FEES PRE-SCHOOL<strong>KSH 1000</strong></li>
                <li className="flex justify-between md:justify-normal md:gap-x-44">ADMISSION FEES PRIMARY<strong>KSH 1000</strong></li>
                <li className="flex justify-between md:justify-normal md:gap-x-52">P/P PHOTOS FOR CBC<strong>KSH 1000</strong></li>
                
            </ul>
        </div>
        <div className="px-3 py-9 space-y-2 w-full md:pr-9">
            <h1 className="text-[#146e38] font-serif font-extrabold text-lg">ANNUAL PAYMENT</h1>
            <ul className="list-inside list-disc space-y-4">
                <li className="flex justify-between gap-x-3 ">EXERCISE BOOKS,REPORT BOOKS AND DIARY<strong>KSH 1000</strong></li>
                <li className="flex justify-between gap-x-3  ">GRADE 1-3<strong>KSH 1000</strong></li>
                <li className="flex justify-between ">GRADE 4-8<strong>KSH 1000</strong></li>
                
                
            </ul>
        </div>
        </div>
   <Table />
   <div className="md:grid md:grid-cols-2 lg:h-[50vh] ">
<div className="p-4 space-y-5  lg:place-content-center">
  <h1 className="text-[#146e38] font-serif font-extrabold text-lg">TERMS OF PAYMENT</h1>
  <p className="text-[#324055]">Fees should be paid in full on or before the first day of the term </p>
  <p className="text-[#324055]">Fees is payable into either of the following Bank Accounts</p>
</div>
<div className="p-4 pt-2 space-y-5  lg:place-content-center">
  <h1 className="text-[#146e38] font-serif font-extrabold text-lg">BANK DETAILS:</h1>
  <ul className="list-inside list-disc ml-7 flex flex-col space-y-3">
    <li className="text-[#324055]"><strong>I&M</strong> Account Number:024365272881</li>
    <li className="text-[#324055]"><strong>GULF AFRICAN BANK</strong> Account Number: 082265233455</li>
    <li className="text-[#324055]"><strong>MPESA</strong> PAYBILL NUMBER: 5238378
    Account Number: Admission no/Student Names</li>
  </ul>
</div>
</div>
<div className="pt-9">
<TransportTable />
</div>
    </div>
}