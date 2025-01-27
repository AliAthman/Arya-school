import Image from "next/image";
export default function CurriculumPage() {
    return (
        <div className="overflow-hidden">
            <div className="bg-[url('/element-bg.svg')] bg-cover bg-no-repeat place-content-center h-[40vh] bg-[#f9aa1f]">
                <h1 className="text-[#146e38] font-serif font-extrabold text-2xl pb-14 pl-3">
                    LEARNING MODEL / CURRICULUM
                </h1>
            </div>
            {/* CONTAINER 1 */}
            <div className="py-14 px-3 space-y-10 bg-[#ebf2ed] md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:px-20">
                <div className="space-y-6">
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">
                    We are an integrated school offering the 8-4-4 and Competency Based Curriculum (CBC) concurrently. The school follows the Kenya National Curriculum while also integrating additional specialized curriculums to provide a comprehensive education.
                    </p>
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">
                    Our curriculum is a gateway to opportunity, fostering personal growth and a vibrant knowledge-based community in and outside Kenya.
                        
                    </p>
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">
                        Being an integrated school, our curriculum is broad, balanced and relevant to all learners. All learning and developmental areas are interconnected to cater for the pupils intellectual and spiritual development.
                    </p>
                </div>
                <div>
                    <Image src="/class.jpeg" layout="responsive" width={700} height={400} alt="class" className="w-full h-auto" />
                </div>
            </div>
            {/* CONTAINER 2 */}
            <div className="py-16 px-3 space-y-10 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:px-20">
                <div>
                    <Image src="/Webinar-amico.svg" layout="responsive" width={700} height={400} alt="class" className="w-full h-auto" />
                </div>
                <div className="space-y-6">
                    <h1 className="text-[#146e38] font-serif font-extrabold text-2xl -mt-2">SPECIALIZED SYLLABUS</h1>
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">
                    We are an integrated school offering the 8-4-4 and Competency Based Curriculum (CBC) concurrently. The school follows the Kenya National Curriculum while also integrating additional specialized curriculums to provide a comprehensive education.
                    </p>
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">
                    Our curriculum is a gateway to opportunity, fostering personal growth and a vibrant knowledge-based community in and outside Kenya.
                    </p>
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">
                    Being an integrated school, our curriculum is broad, balanced and relevant to all learners. All learning and developmental areas are interconnected to cater for the pupils intellectual and spiritual development.
                    </p>
                </div>
            </div>
            {/* CONTAINER 3 */}
            <div className="py-16 px-3 space-y-10 bg-[#fff9ee] md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:px-20">
                <div className="space-y-6 pb-5">
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi harum atque, ipsam non unde similique suscipit impedit tempora quis, possimus vel voluptates esse laboriosam nisi reiciendis expedita. Nobis, vero quia.
                    </p>
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam at beatae nam quos, saepe quae aliquam aperiam quam magni pariatur voluptate ut dolores iste voluptates consectetur corrupti. Quo, dignissimos reprehenderit.
                    </p>
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sit est neque inventore cupiditate assumenda voluptas odio, accusamus corporis natus obcaecati asperiores nam totam eos reprehenderit amet at vero expedita.
                    </p>
                </div>
                <div>
                    <Image src="/quran.jpg" layout="responsive" width={700} height={400} alt="class" className="w-full h-auto" />
                </div>
            </div>
            {/* CONTAINER 4 */}
            <div className="pt-20 px-3 space-y-10 h-[200vh] md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:px-20 md:h-[130vh] lg:h-[90vh]">
                <div>
                    <Image src="/Happy student-rafiki.svg" layout="responsive" width={700} height={400} alt="class" className="w-full h-auto" />
                </div>
                <div className="space-y-6">
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique facere ea doloribus atque ex, amet quam expedita ipsum nobis sequi provident magni nihil impedit at obcaecati quo eligendi. Quasi! </p>
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat unde ratione, exercitationem quod atque voluptatem repellendus numquam optio ea, eligendi eaque eveniet iste sunt nulla. Maxime qui hic illo? </p>
                    <p className="tracking-widest leading-relaxed text-justify lg:tracking-normal lg:leading-loose"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at qui numquam ut? Doloribus, soluta! Esse animi quasi molestiae fuga voluptates earum dicta maiores rerum dolorem nisi? Ullam, doloribus iure? </p>
                </div>
            </div>
            
        </div>
    );
}
