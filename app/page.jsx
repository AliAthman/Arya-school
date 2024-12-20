"use client"
import Image from "next/image";
import Topbar from "@/components/Topbar";
import Faqs from "@/components/FAQs";
import Link from "next/link";
import Contact from "@/components/contact";
import { useState,useEffect } from "react";
export default function Home() {

  const [currentImage, setCurrentImage] = useState(0); 
  const images = ["/bg1.jpg", "/bg-girls.jpg", "/bg-kids-playing.jpg","/students.jpg"]; // Add more images to this array as needed 
  useEffect(() => 
    { const interval = setInterval(() => {
       setCurrentImage((prevImage) => (prevImage + 1) % images.length); }, 5000); // Change image every 5 seconds 
  return () => clearInterval(interval); }, [images.length]);
  
  return (
    <div className="overflow-x-hidden">
      <div className=" bg-cover bg-center h-[130vh] flex flex-col justify-end" style={{ backgroundImage: `url(${images[currentImage]})` }}>
        <div className="p-8 items-center md:w-1/2 lg:p-14 lg:text-5xl text-green-800 font-extrabold text-3xl bg-yellow-600 mb-20">
          <p>Welcome to Arya Primary School</p>
        </div>
      </div>

      <div className="flex flex-col bg-green-800 items-center justify-evenly md:justify-around h-[350vh] md:h-[90vh] md:flex-row md:flex-nowrap md:space-y-0">
        <div className="w-3/4 md:w-1/4 p-4">
          <Image
            src="/schoolkids.jpg"
            width={400}
            height={200}
            alt="schoolkids"
            className="w-full h-[50vh] object-cover"
          />
          <p className="bg-yellow-600 text-green-700 p-4 text-3xl font-extrabold text-left">
            <Link href="/">Early Years Education</Link>
          </p>
        </div>
        <div className="w-3/4 md:w-1/4 p-4">
          <Image
            src="/schoolkids.jpg"
            width={400}
            height={200}
            alt="schoolkids"
            className="w-full h-[50vh] object-cover"
          />
          <p className="bg-yellow-600 text-green-700 p-4 text-3xl font-extrabold text-left">
            <Link href="/">Middle School</Link>
          </p>
        </div>
        <div className="w-3/4 md:w-1/4 p-4">
          <Image
            src="/schoolkids.jpg"
            width={400}
            height={200}
            alt="schoolkids"
            className="w-full h-[50vh] object-cover"
          />
          <p className="bg-yellow-600 text-green-700 p-4 text-3xl font-extrabold text-left">
            <Link href="/">Junior Secondary</Link>
          </p>
        </div>
        <div className="w-3/4 md:w-1/4 p-4">
          <Image
            src="/schoolkids.jpg"
            width={400}
            height={200}
            alt="schoolkids"
            className="w-full h-[50vh] object-cover"
          />
          <p className="bg-yellow-600 text-green-700 p-4 text-3xl font-extrabold text-left">
            <Link href="/">Senior Secondary</Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center ">
        <div className="w-full p-11">
          <Image
            src="/congratulations.jpeg"
            width={400}
            height={400}
            alt="pic"
            className="h-[50vh] rounded-tr-3xl rounded-s-3xl "
          />
        </div>
        <div className="p-4 w-screen md:hidden">
          <div className=" ring-1  ring-gray-300"></div>
        </div>
        <div className="p-5 w-full">
          <Image
            src="/results-2023.jpeg"
            width={400}
            height={400}
            alt="pic"
            className="h-[50vh] rounded-2xl"
          />
        </div>
        <div className="p-4">
          <p className="text-gray-500 font-semibold">
          Congratulations NMA Class of 2023! Alhamdulillah! May Allah open doors of success and goodness to all the students who have made us so proud. Mabrouk! For the excellent performance.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center  md:flex-row md:w-full ">
        <div className="flex flex-col items-center  p-12  space-y-5 md:w-1/2">
          <h1 className="text-green-800 font-extrabold text-3xl">
            Welcome Message from School Manager
          </h1>
          <h2 className="text-yellow-600 text-2xl font-bold">
            Promoting integrity and ethical values in education is now an
            obligation not a choice
          </h2>
          <p className="font-bold text-gray-600 text-justify">
            Our children are living in circumstances that we never imagined in
            our wildest dreams. We have witnessed an alarming increase in
            content in multi-media platforms including books for children that
            challenge our very definition of a family. Now, a child is being
            told a family doesn’t necessarily mean a father, mother and children
            but it can be as each family defines it to be!
          </p>
          <p className="font-bold text-gray-600 text-justify">
            How can we in the education sector just watch such blatant
            defamation of our family structure and our religious values? For
            Muslims,the responsibility is even greater since the teachings of
            our religion are very clear on how the family is the basic structure
            of our society and it must be jealously guarded.
          </p>
          <p className="font-bold text-gray-600 text-justify ">
            As an Islamic educational institution, Nairobi Muslim Academy (NMA)
            is at the forefront of safeguarding integrity and the ethical values
            of our children. We intentionally ensure that the children who come
            to our school are nurtured in an Islamic environment, that promotes
            a lifestyle that is obedient to the teachings of the Holy Quran and
            the Sunnah of our Prophet Muhammad (peace be upon him).
          </p>
          <p className="font-bold text-gray-600 text-justify">
            We acknowledge that we have to work together with all stakeholders
            including parents, Islamic scholars, the government education sector
            regulators and policy makers to ensure that our children are exposed
            only to beneficial content. Any content and lifestyle that is
            potentially detrimental to their wellbeing and future prosperity
            must be called out.
          </p>
        </div>
        <div className="justify-center flex h-[80vh] md:ring-1 md:ring-black md:mb-24 pb-20 pt-10 px-10  md:w-1/2 md:h-[120vh] md:mr-10 md:mt-20 ">
          <Image src="/ALI.jpg" width={900} height={600} alt="principal" />
        </div>
      </div>


      <div>
      <div className="flex flex-col bg-cover pt-8 bg-center justify-start space-y-10 pb-8 items-center md:justify-center md:space-y-0 md:min-h-[70vh] bg-[url('/edu-bg.svg')] bg-green-50 md:pt-14 md:pb-14">
  <div className="text-center md:mb-8 md:mt-6 md:w-full">
    <h1 className="text-green-800 font-extrabold text-3xl">
      Why Arya Primary School?
    </h1>
  </div>
  <div className="flex flex-col space-y-10 items-center md:flex-row md:justify-center md:space-x-10 md:space-y-0 w-full">
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/book.png"
        width={90}
        height={40}
        alt="logo"
        className=""
      />
      <p className="text-green-950 font-bold text-2xl">
        Great Learning Environment
      </p>
    </div>
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/graduate.png"
        width={90}
        height={40}
        alt="logo"
        className=""
      />
      <p className="text-green-950 font-bold text-2xl">Top Performing</p>
    </div>
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/science.png"
        width={90}
        height={40}
        alt="logo"
      />
      <p className="text-green-950 font-bold text-2xl">Science Majors</p>
    </div>
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/talent-management.png"
        width={90}
        height={40}
        alt="logo"
      />
      <p className="text-green-950 font-bold text-2xl">Nurturing Talents</p>
    </div>
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/football.png"
        width={90}
        height={40}
        alt="logo"
      />
      <p className="text-green-950 font-bold text-2xl">
        Extra Curricula Activities
      </p>
    </div>
  </div>
</div>

 

</div>
<Faqs/>
<Contact/>
</div>

      

    
  );
}
