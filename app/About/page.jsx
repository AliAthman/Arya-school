"use client"
import { useState,useEffect } from "react";
import Image from "next/image"
export default function About(){

  const [currentImage, setCurrentImage] = useState(0); 
  const images = ["/bg-books.jpg", "/bg-girls.jpg", "/bg-kids-playing.jpg","/students.jpg"]; // Add more images to this array as needed 
  useEffect(() => 
    { const interval = setInterval(() => {
       setCurrentImage((prevImage) => (prevImage + 1) % images.length); }, 5000); // Change image every 5 seconds 
  return () => clearInterval(interval); }, [images.length]);
  

    return <div className="flex flex-col">
<div className="  bg-center h-[125vh] flex flex-col bg-cover  justify-center " style={{ backgroundImage: `url(${images[currentImage]})` }}>
    <div className="ml-1 mr-1 md:m-0 md:w-1/2">
    <p className="bg-[#f8ab1f] items-center lg:ml-8  p-5 md:px-1 md:py-8 font-extrabold text-[#146e38] text-4xl ">ABOUT US</p>
    </div>
</div>

    <div className="flex flex-col px-3 py-10 space-y-14 h-[150vh] bg-[#ebf2ed] md:grid md:grid-cols-3 md:gap-6 md:space-y-0 md:h-[60vh] md:p-10 ">
  <div className="space-y-5">
    <h1 className="text-[#146e38] font-extrabold text-2xl">Vision</h1>
    <p className="text-[#414f61] font-serif">To be a leading centre that provides integrated Islamic and secular education</p>
  </div>
  <div className="space-y-5">
    <h1 className="text-[#146e38] font-extrabold text-2xl">Mission</h1>
    <p className="text-[#414f61] font-serif">To provide holistic quality education based on Islamic values and principles</p>
  </div>
  <div className="space-y-5">
    <h1 className="text-[#146e38] font-extrabold text-2xl">Our Objectives</h1>
    <ul className="space-y-3 list-disc list-inside">
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
</div>

<div className="flex flex-col py-24 bg-[#ffffff] space-y-6 px-3 md:grid md:grid-cols-2 md:gap-6 md:h-[120vh] lg:h-[100vh] md:px-10">
  <div className="flex justify-center items-start md:items-center w-auto">
    <Image
      src="/students.jpg"
      alt="students"
      className="w-full h-auto md:max-w-full "
      layout="responsive"
      width={600}
      height={480}
    />
  </div>
  <div className="flex flex-col justify-center ">
    <p className="text-[#146e38] font-extrabold text-2xl w-full">Our Objectives of Islamic Education</p>
    <ul className="list-inside list-disc px-3 py-4 text-[#414f61] font-serif w-full  ">
      <li>Knowing Allah with a view to worship Him</li>
      <li>Instilling moral values and discipline</li>
      <li>Enabling learners to grow in totality</li>
      <li>Imparting positive skills and attitudes so as to contribute meaningfully to the development of the community</li>
      <li>Sustaining and spreading the teachings of Islam</li>
      <li>Inculcating the spirit of peaceful co-existence</li>
      <li>Satisfying the intellectual curiosity in line with Islamic teachings</li>
      <li>Imparting skills that enable individuals to cope with the challenges of the changing world while maintaining their Islamic identity</li>
    </ul>
  </div>
</div>

<div className="flex flex-col p-5 space-y-5 pb-10 md:pt-0 ">
    <p className="text-[#146e38] font-extrabold text-3xl text-center">BOARD OF TRUSTEES</p>
    <div className="pt-2 md:flex md:flex-row  md:p-12">
      <Image src="/SCHOOL-MANAGER.jpg" width={297} height={297} alt="manager"  className="w-full h-auto md:w-1/2" />
      <div className="md:w-1/2 md:space-x-5">
        <p className="text-[#146e38] font-bold text-xl text-start pt-4 md:pt-0 md:ml-5 ">Mohamed Osman Warfa</p>
        <div className="space-y-7 text-[#414f61] font-serif">
            <p className="text-balance pt-4">Mohamed Osman Warfa is a long serving veteran Educationalist. He is the brain child of Nairobi Muslim Academy and he is the pillar behind the success of the school as its manager. He is the Secretary of the Waqf (Nairobi Islamic Charitable Trust) that runs the school. </p>
                <p> He serves in other roles within the Muslim community. He is the chairman of the Jamia Mosque Committee. He is a member of Tabligh (Propagation of Islam)</p>
            <p> He is a Philanthropist and a proactive mentor to many.</p>
        </div>
        </div>
    </div>
    <div className="pt-2 md:flex md:flex-row  md:p-12 md:pt-0">
      <div className="md:w-1/2 md:space-">

        <p className="text-[#146e38] font-bold text-xl text-start pt-4 md:pt-0">Ali Athman Bakari</p>
        <div className="space-y-7 text-[#414f61] font-serif">
            <p className="text-start pt-4">Mohamed Osman Warfa is a long serving veteran Educationalist. He is the brain child of Nairobi Muslim Academy and he is the pillar behind the success of the school as its manager. He is the Secretary of the Waqf (Nairobi Islamic Charitable Trust) that runs the school. </p>
                <p> He serves in other roles within the Muslim community. He is the chairman of the Jamia Mosque Committee. He is a member of Tabligh (Propagation of Islam)</p>
            <p> He is a Philanthropist and a proactive mentor to many.</p>
        </div>
        </div>
        <Image src="/SCHOOL-MANAGER.jpg" width={297} height={297} alt="manager" className="pt-5 w-full h-auto  md:w-1/2" />
        
    </div>

</div>

</div>

}