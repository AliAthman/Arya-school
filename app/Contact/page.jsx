// import Image from "next/image";
// import Contact from "@/components/contact";

// export default function ContactPage() {
//   return (
//     <div className="pb-20 flex flex-col">
//       <div className="bg-[url('/element-bg.svg')] bg-cover bg-center place-content-center h-[40vh] bg-[#f9aa1f]">
//         <h1 className="text-[#146e38] font-serif font-extrabold text-2xl pb-14 pl-3">CONTACTS</h1>
//       </div>
//           <div className="sm:place-items-center md:pt-10 md:pb-24 lg:grid lg:grid-cols-2 lg:pr-6 lg:gap-6">
//         <Contact />
              
//               <div className="flex flex-col justify-center px-5">
//                   <h1 className="font-extrabold pb-4">OUR LOCATION</h1>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.823181317335!2d39.66334087358908!3d-4.0564506449260245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012d9673918af%3A0xec7d5e1784957e33!2sArya%20Samaj%20Academy%20Mombasa!5e0!3m2!1sen!2ske!4v1735053128869!5m2!1sen!2ske"
//             width="600"
//                       height="500"
//                       style={{ border: 0 }}
//                       className=""
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }




import Image from "next/image";
import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="pb-20 flex flex-col">
      <div className="bg-[url('/element-bg.svg')] bg-cover bg-center place-content-center h-[40vh] bg-[#f9aa1f]">
        <h1 className="text-[#146e38] font-serif font-extrabold text-2xl pb-14 pl-3">CONTACTS</h1>
      </div>
      <div className="sm:place-items-center md:pt-10 md:pb-24 lg:grid lg:grid-cols-2 lg:pr-6 lg:gap-6 ">
        <Contact />
        <div className="flex flex-col justify-center px-5 lg:-mt-24">
          <h1 className="font-extrabold pb-4">OUR LOCATION</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.823181317335!2d39.66334087358908!3d-4.0564506449260245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012d9673918af%3A0xec7d5e1784957e33!2sArya%20Samaj%20Academy%20Mombasa!5e0!3m2!1sen!2ske!4v1735053128869!5m2!1sen!2ske"
            className="w-full md:w-[80vw] h-64 md:h-96 border-0 lg:w-[45vw] "
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
