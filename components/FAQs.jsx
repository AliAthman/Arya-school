
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="bg-[url('/faqs.svg')] bg-cover bg-center md:h-[80vh] h-[130vh] p-4 bg-yellow-50 md:justify-start flex justify-center items-center">
      <Accordion type="single" collapsible className="bg-green-50 p-3 w-full max-w-2xl">
        <AccordionItem value="item-1">
          <AccordionTrigger>WHERE IS ARYA SCHOOL LOCATED?</AccordionTrigger>
          <AccordionContent className="bg-inherit">
            Arya Primary School is located in Mombasa, Kenya.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>WHAT IS THE AVERAGE CLASS SIZE?</AccordionTrigger>
          <AccordionContent className="bg-inherit">
            The average class size is 25 students.
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
          <AccordionTrigger>HOW QUALIFIED ARE THE ACADEMIC STAFF?</AccordionTrigger>
          <AccordionContent className="bg-inherit">
            Our academic staff are highly qualified, with many holding advanced degrees.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>HOW IS ARYA SCHOOL&apos;S PERFORMANCE IN EXAMINATIONS?</AccordionTrigger>
          <AccordionContent className="bg-inherit">
            Arya Primary School has a strong track record of excellent performance in national examinations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
