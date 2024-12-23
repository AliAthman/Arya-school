
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  return (
    <div className="bg-white items-center flex pt-8 pb-7 pr-3 pl-3 h-[160vh] md:max-h-min md:justify-center ">
      <Card className="w-[350px] md:w-[500px] ">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Option</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Please choose an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#fff9ee]" position="popper">
                    <SelectItem value="next">Early Years Education</SelectItem>
                    <SelectItem value="sveltekit">Junior Secondary</SelectItem>
                    <SelectItem value="astro">Middle School</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Additional Message" className="h-80 lg:h-32" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="text-[#186c3c] bg-transparent hover:bg-[#f9aa1f] hover:text-black rounded-full ring-1 ring-[#186c3c] hover:ring-transparent">
            Submit Message
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
