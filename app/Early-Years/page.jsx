"use client"
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
export default function EarlyYears() {

      const [currentImage, setCurrentImage] = useState(0); 
      const images = ["/bg-books.jpg", "/bg-girls.jpg", "/bg-kids-playing.jpg","/students.jpg"]; // Add more images to this array as needed 
      useEffect(() => 
        { const interval = setInterval(() => {
           setCurrentImage((prevImage) => (prevImage + 1) % images.length); }, 5000); // Change image every 5 seconds 
      return () => clearInterval(interval); }, [images.length]);
      
    return ( 
        <div className="flex flex-col pb-60">
            <div className="  bg-center h-[125vh] flex flex-col bg-cover md:h-[80vh]  justify-center " style={{ backgroundImage: `url(${images[currentImage]})` }}>
    <div className="ml-1 mr-1 md:m-0 md:w-1/2">
    <p className="bg-[#f8ab1f] items-center lg:ml-8  p-5 md:px-1 md:py-8 font-extrabold text-[#146e38] text-4xl ">EARLY YEARS EDUCATION</p>
                </div>
                
            </div>
            {/* CONTAINER 1 */}
            <div className="md:grid md:grid-cols-2">
                    <div className="w-full">
                        <Image src="/SCHOOL-MANAGER.jpg" width={320} height={213} className="w-full h-56 md:h-96" alt="headteacher"  />
                        <p className="bg-[#f8ab1f] items-center flex justify-center w-full text-[#146e38] text-xl font-bold p-5 md:border-r-2 ">HEADTEACHER- ASMA MOHAMED SALEH MAALIM</p>
                    </div>
                
                <div className="w-full">
                        <Image src="/SCHOOL-MANAGER.jpg" width={320} height={213} className="w-full h-56 md:h-96" alt="headteacher"  />
                        <p className="bg-[#f8ab1f] items-center flex justify-center w-full md:w-auto text-[#146e38] text-xl font-bold p-5">HEADTEACHER- ASMA MOHAMED SALEH MAALIM</p>
                    </div>
                  
            </div>
            
            {/* CONTANER 2 */}
            <div className="py-16 px-3 space-y-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
                <div>
                    <p className="text-[#414f61] font-serif text-justify">The NMA Early Years of Education section offers a unique blend of Islamic studies integrated with secular subjects in the Competency-Based Curriculum (CBC). This enables every learner to achieve the 21st century skills and core competencies to become an engaged, empowered and ethical citizen. The section caters for learners in age groups 3 to 9 years which are the play group (reception class) to Grade 3. The section is enriched with child friendly facilities to make learning fun. Learners enjoy a warm and loving relationship with teachers to make school a home away from home. Our aim is to develop learners who are creative, independent thinkers, confident and successful Muslim change makers.</p>
                </div>
                <Image  src="/SCHOOL-MANAGER.jpg" width={320} height={213} layout="responsive"  className="w-full h-auto" alt="pic" />
            </div>
             {/* CONTANER 3 */}
            <div className="py-16 px-3 space-y-8 bg-[#ebf2ed] md:grid md:grid-cols-2 md:gap-6 md:space-y-0 ">
                <div className="space-">
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} layout="responsive"  className="w-full h-auto" alt="pic" />
              
                </div>
                <div className="space-y-4">
                          <p className="bg-[#f8ab1f] items-center flex justify-center w-1/2 text-[#146e38] text-xl font-bold py-4 pr-12 pl-2 rounded-r-3xl">The Staff</p>
                    <p className="text-[#414f61] font-serif text-justify">The NMA Early Years of Education section offers a unique blend of Islamic studies integrated with secular subjects in the Competency-Based Curriculum (CBC). This enables every learner to achieve the 21st century skills and core competencies to become an engaged, empowered and ethical citizen. The section caters for learners in age groups 3 to 9 years which are the play group (reception class) to Grade 3. The section is enriched with child friendly facilities to make learning fun. Learners enjoy a warm and loving relationship with teachers to make school a home away from home. Our aim is to develop learners who are creative, independent thinkers, confident and successful Muslim change makers.</p>
                </div>
                
            </div>
            {/* CONTANER 4 */}
            <div className="py-16 px-3 space-y-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 ">
              
                <div className="space-y-5">
                <p className="bg-[#f8ab1f] items-center flex justify-center w-1/2 text-[#146e38] text-xl font-bold py-4 pr-12 pl-2 rounded-r-3xl">Academics</p>
                    <p className="text-[#414f61] font-serif text-justify">The NMA Early Years of Education section offers a unique blend of Islamic studies integrated with secular subjects in the Competency-Based Curriculum (CBC). This enables every learner to achieve the 21st century skills and core competencies to become an engaged, empowered and ethical citizen. The section caters for learners in age groups 3 to 9 years which are the play group (reception class) to Grade 3. The section is enriched with child friendly facilities to make learning fun. Learners enjoy a warm and loving relationship with teachers to make school a home away from home. Our aim is to develop learners who are creative, independent thinkers, confident and successful Muslim change makers.</p>
                </div>
                <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} layout="responsive" className="w-full h-auto" alt="pic" />
                
            </div>
            {/* CONTAINER 5 */}
            <div className="py-16 px-5 bg-[#ebf2ed]">
                <div className="w-full">
                    <h1 className="text-[#146e38] text-xl font-bold flex justify-center items-center w-full text-center">The Early Years Educational activities comprises of:</h1>
                </div>
                <div className="md:grid md:grid-cols-2">
                <div className="flex flex-col space-y-5 mt-5">
                    <h2 className="text-[#146e38] text-xl font-bold flex ">Play Group to PP2</h2>
                    <ul className="space-y-2">
                        <li className="flex gap-x-12 text-[#414f61] font-serif text-justify"><span>&rarr;</span>Language Activities </li>
                        <li className="flex gap-x-12 text-[#414f61] font-serif text-justify"><span>&rarr;</span>Mathematics Activities </li>
                        <li className="flex gap-x-12 text-[#414f61] font-serif text-justify"><span>&rarr;</span>Environmental Activities </li>
                        <li className="flex gap-x-12 text-[#414f61] font-serif text-justify"><span>&rarr;</span>Creative Art Activities </li>
                        

                    </ul>
                </div>
                <div className="flex flex-col space-y-5 mt-5">
                    <h2 className="text-[#146e38] text-xl font-bold flex ">Grade 1- Grade 3</h2>
                    <ul className="space-y-2">
                        <li className="flex gap-x-12 text-[#414f61] font-serif text-justify"><span>&rarr;</span>Language Activities </li>
                        <li className="flex gap-x-12 text-[#414f61] font-serif text-justify"><span>&rarr;</span>Mathematics Activities </li>
                        <li className="flex gap-x-12 text-[#414f61] font-serif text-justify"><span>&rarr;</span>Environmental Activities </li>
                        <li className="flex gap-x-12 text-[#414f61] font-serif text-justify"><span>&rarr;</span>Creative Art Activities </li>
                        

                    </ul>
                    </div>
                    </div>
                
            </div>
             {/* CONTANER 6 */}
             <div className="py-16 px-3 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0  ">
                <div className="md:content-center">
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-60" alt="pic" />
                  
                </div>
                <div className="space-y-4">
                <p className=" items-center flex  pt-1 text-[#146e38] text-xl font-bold  pr-6 pl- ">What Makes NMA Early Years of Education unique in educating your Child?</p>
                    <p className="text-[#414f61] font-serif text-justify">The NMA Early Years of Education section offers a unique blend of Islamic studies integrated with secular subjects in the Competency-Based Curriculum (CBC). This enables every learner to achieve the 21st century skills and core competencies to become an engaged, empowered and ethical citizen. The section caters for learners in age groups 3 to 9 years which are the play group (reception class) to Grade 3. The section is enriched with child friendly facilities to make learning fun. Learners enjoy a warm and loving relationship with teachers to make school a home away from home. Our aim is to develop learners who are creative, independent thinkers, confident and successful Muslim change makers.</p>
                </div>
                
            </div>
            {/* CONTAINER 7 */}
            <div className="px-6 space-y-5 bg-[#fff9ee] pt-7 pb-16 ">
                    <h1  className=" text-center flex justify-center pt-4 text-[#146e38] text-xl font-bold">Extra Curriculum Activities</h1>
              <div className="md:grid md:grid-cols-4 md:gap-6 md:space-y-0">
            <div>
              
                <div className="pt-3 space-y-4">
                    <Image src="/schoolkids.jpg" width={350} height={200} alt="kids" layout="responsive" className="w-full h-auto"   />
                    <p className="bg-[#f8ab1f] items-center flex justify-start w- text-[#146e38] text-xl font-bold py-4  pl-4 rounded-r-3xl">Clubs</p>
                    <p>NMA Early Years Education offers a broad range of Clubs and activities to enable the learners build good social habits which develop and nature skills, talents and boost creativity and confidence in our learners as we prepare them to fit in school and home society. The Clubs in the school are: Scouts, Environmental Club, Cookery Club, Public Speaking and Art Club</p>
                </div>
                </div>
              
                <div>
               
                <div className="pt-6 space-y-4">
                    <Image src="/schoolkids.jpg" width={350} height={200} alt="kids" className="w-full h-60"  layout="responsive" />
                    <p className="bg-[#f8ab1f] items-center flex justify-start w- text-[#146e38] text-xl font-bold py-4  pl-4 rounded-r-3xl">Sports</p>
                    <p>NMA Early Years Education offers a broad range of Clubs and activities to enable the learners build good social habits which develop and nature skills, talents and boost creativity and confidence in our learners as we prepare them to fit in school and home society. The Clubs in the school are: Scouts, Environmental Club, Cookery Club, Public Speaking and Art Club</p>
                </div>
                </div>
                <div>
             
                <div className="pt-6 space-y-4">
                    <Image src="/schoolkids.jpg" width={350} height={200} alt="kids" className="w-full h-60"  layout="responsive"  />
                    <p className="bg-[#f8ab1f] items-center flex justify-start w- text-[#146e38] text-xl font-bold py-4  pl-4 rounded-r-3xl">Community Service activities</p>
                    <p>NMA Early Years Education offers a broad range of Clubs and activities to enable the learners build good social habits which develop and nature skills, talents and boost creativity and confidence in our learners as we prepare them to fit in school and home society. The Clubs in the school are: Scouts, Environmental Club, Cookery Club, Public Speaking and Art Club</p>
                </div>
                </div>
                <div>
               
                <div className="pt-6 space-y-4">
                    <Image src="/schoolkids.jpg" width={350} height={200} alt="kids" className="w-full h-60" layout="responsive"   />
                    <p className="bg-[#f8ab1f] items-center flex justify-start w- text-[#146e38] text-xl font-bold py-4  pl-4 rounded-r-3xl">Other Co-curricular Activities</p>
                    <p>NMA Early Years Education offers a broad range of Clubs and activities to enable the learners build good social habits which develop and nature skills, talents and boost creativity and confidence in our learners as we prepare them to fit in school and home society. The Clubs in the school are: Scouts, Environmental Club, Cookery Club, Public Speaking and Art Club</p>
                </div>
                    </div>
                    </div>
            </div>
            <div className="pt-14 w-full px-5 pb-20">
                
                <p className=" items-center flex   text-[#146e38] text-xl font-bold w-full  text-center">Student Wellness, Safety & Protection</p>
                <div className="md:grid md:grid-cols-2 md:space-y-0 md:gap-6">

                
            <div className="pt-8  space-y-8 ">
                <div className="space-y-5">
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <p className="bg-[#f8ab1f] items-center flex justify-center w-1/2 text-[#146e38] text-xl font-bold py-4 pr-12 pl-2 rounded-r-3xl">Meals</p>
                </div>
                <div >
                    <p className="text-[#414f61] font-serif text-justify">The school provides snacks and hot drinks during break time daily to all the learners. We also provide delicious meals that are healthy and balanced. If any child requires a special diet the school allows the parents to prepare packed lunch. The school also has a spacious dining hall with a modern kitchen facility.</p>
                </div>
                
                </div>
                <div className="pt-8  space-y-8 ">
                <div className="space-y-5">
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <p className="bg-[#f8ab1f] items-center flex justify-center w-1/2 text-[#146e38] text-xl font-bold py-4  pl-4 rounded-r-3xl">In house Counsellor</p>
                </div>
                <div>
                    <p className="text-[#414f61] font-serif text-justify">We have a qualified educational therapist in the school who has experience of working with learners of all ages.</p>
                </div>
                
                </div>
                <div className="pt-8  space-y-8 ">
                <div className="space-y-5">
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <p className="bg-[#f8ab1f] items-center flex justify-center w-1/2 text-[#146e38] text-xl font-bold py-4 pr-12 pl-2 rounded-r-3xl">First Aid</p>
                </div>
                <div>
                    <p className="text-[#414f61] font-serif text-justify">The school has equipped first aid areas where incases of injury learners are attended to by a trained first aider. In cases where the injuries are severe, there is a stand by minivan to take learners to the hospital facility which is in the school’s proximity.</p>
                </div>
                
                </div>
                <div className="pt-8  space-y-8 ">
                <div className="space-y-5">
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <p className="bg-[#f8ab1f] items-center flex justify-center w-1/2 text-[#146e38] text-xl font-bold py-4 pr-12 pl-2 rounded-r-3xl">Peer Talking</p>
                </div>
                <div>
                    <p className="text-[#414f61] font-serif text-justify">Every Friday, learners are given a platform for peer talking. These are interactive sessions to guide learners in solving problems faced on a day-to-day basis. Apart from peer talking, learners are offered guidance to cater for emerging issues. Our teachers are trained to give learners a listening ear and are supportive in managing the issues they raise.</p>
                </div>
                
                </div>
                <div className="pt-8  space-y-8 ">
                <div className="space-y-5">
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <p className="bg-[#f8ab1f] items-center flex justify-center w-1/2 text-[#146e38] text-xl font-bold py-4  pl-4 rounded-r-3xl">School leadership</p>
                </div>
                <div>
                    <p className="text-[#414f61] font-serif text-justify">In the NMA Early Years Education, the learners exercise their democratic right to vote for their class governors and deputy governors, who are their roles so as to influence, motivate and guide other learners towards achieving the school objectives.</p>
                </div>
                
                    </div>
                    </div>
            </div>
            {/* GALLERY */}
            <div className="flex flex-col px-3">
                <h1 className=" items-center flex justify-center pb-8  text-[#146e38] text-xl font-bold w-full  text-center">Gallery</h1>
                <div className="space-y-4 md:grid md:grid-cols-3 md:grid-rows-4 md:space-y-0 md:gap-3">
                <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    <Image src="/SCHOOL-MANAGER.jpg" width={350} height={213} className="w-full h-56" alt="pic" />
                    </div>
            </div>
            {/* FAQ */}
            <div className="pt-24 px-3 pb-24  md:place-items-center  ">
            <h1 className=" items-center flex justify-center pb-3 text-[#146e38] text-xl font-bold w-full md:w-1/2 ">Frequently Asked Questions on Early Child Education</h1>
            <Accordion type="single" collapsible className="bg-green-50 p-3 w-full max-w-2xl md:w-1/2">
        <AccordionItem value="item-1">
          <AccordionTrigger>WHERE IS ARYA SCHOOL LOCATED?</AccordionTrigger>
          <AccordionContent className="bg-inherit">
            Arya Primary School is located in Nairobi, Kenya.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>WHAT IS THE AVERAGE CLASS SIZE?</AccordionTrigger>
          <AccordionContent className="bg-inherit">
          The classes are spacious with an average of 35 learners
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>ARE BOTH BOYS AND GIRLS ADMITTED?</AccordionTrigger>
          <AccordionContent className="bg-inherit">
            Yes, both boys and girls are admitted.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>WHAT CURRICULUM IS OFFERED?</AccordionTrigger>
          <AccordionContent className="bg-inherit">
            Arya Primary School offers the Kenya National Curriculum.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>WHAT IS THE MINIMUM AGE OF ADMISSION FOR EARLY YEAR'S PUPILS?</AccordionTrigger>
          <AccordionContent className="bg-inherit space-y-3 ">
          <p>The admission age to our reception / playgroup class is age three in the year of enrolment.</p>

<p className="text font-bold">Pupils are admitted to:</p>

<p> Pre – primary 1 (PP1) – age four </p>

<p>Pre – Primary 2 (PP2) – age five </p>

<p>Grade one – age six </p>

<p>Grade two – age seven </p>

<p>Grade three – age eight – nine</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>HOW IS ARYA SCHOOL'S PERFORMANCE IN EXAMINATIONS?</AccordionTrigger>
          <AccordionContent className="bg-inherit">
            Arya Primary School has a strong track record of excellent performance in national examinations.
          </AccordionContent>
        </AccordionItem>
                </Accordion>
                <div className="w-full flex justify-center pt-24">
                <button className="py-2 px-3 rounded-full ring-1 ring-green-300 text-green-300">
                    <Link href="/">Download Application</Link>
                </button>
            </div>
            </div>
            
        </div>
    )
}