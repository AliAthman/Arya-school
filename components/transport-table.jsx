import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
export default function TransportTable(){
    return <div className="flex justify-center items-center place-content-center ml- place-items-center">
<Table className="w-full border-collapse bg-[#ebf2ed] ">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-start bg-gray-200 text-[#146e38] font-serif font-extrabold text-lg" colSpan={8}>
                    TRANSPORT
                  </TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="text-center"></TableHead>
                  <TableHead className="text-center font-extrabold text-black colSpan={}  ">ESTATES</TableHead>
                  <TableHead className="text-right font-extrabold text-black  w-40">ONE WAY</TableHead>
                  <TableHead className="text-right font-extrabold text-black ">TWO WAY</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-extrabold text-black w-40">ZONE A</TableCell>
                  <TableCell className="text-center -ml-14 ">Uchumi Rd/Mama Ngina Estate/ Quick Estate/ Space Apartment</TableCell>
                  {/* <TableCell></TableCell> */}
                  <TableCell className="text-right ">KSH 10000</TableCell>
                  <TableCell className="text-right ">KSH 3000</TableCell>
                  {/* <TableCell></TableCell> */}
                  {/* <TableCell></TableCell> */}
                  {/* <TableCell></TableCell> */}

                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">ZONE B</TableCell>
                  <TableCell className="text-center ">Nairobi West-Kodi Rd/Equity/….</TableCell>
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">KSH 4758</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40">ZONE C</TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow><TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow><TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40">ZONE D</TableCell>
                <TableCell className="text-center -ml-14">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">ZONE E</TableCell>
                  <TableCell className="text-center">D.O.D Area, Yaya Phase 1 & 11, Hurligham, Kilimani</TableCell>
                  {/* <TableCell></TableCell> */}
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">KSH 4563</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">ZONE F</TableCell>
                  <TableCell className="text-center">Kibera, Ayany,</TableCell>
                  {/* <TableCell></TableCell> */}
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">KSH 2093</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">ZONE G</TableCell>
                  <TableCell className="text-center"> Ngumo, Magiwa, Golf course, Sunview Estate,</TableCell>
                  {/* <TableCell></TableCell> */}
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">KSH 2938</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40">ZONE H</TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-extrabold text-black  w-40"></TableCell>
                <TableCell className="text-center -ml-14 ">Kogo Plaza/Akiba United/Humayun/Miller/</TableCell>
                <TableCell className="text-right ">KSH 10000</TableCell>
                <TableCell className="text-right ">KSH 1000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">ZONE J</TableCell>
                  <TableCell className="text-center">Bomas/</TableCell>
                  {/* <TableCell></TableCell> */}
                  <TableCell className="text-right ">KSH 10000</TableCell>
                  <TableCell className="text-right">KSH 5344</TableCell>
                </TableRow>
               
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
    </div>
}
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";
  
//   const transportData = [
//     {
//       zone: "ZONE A",
//       estates: ["Uchumi Rd/Mama Ngina Estate/ Quick Estate/ Space Apartment"],
//       oneWay: "KSH 10000",
//       twoWay: "KSH 3000",
//     },
//     {
//       zone: "",
//       estates: ["Kogo Plaza/Akiba United/Humayun/Miller/"],
//       oneWay: "KSH 10000",
//       twoWay: "KSH 1000",
//     },
//     {
//       zone: "ZONE B",
//       estates: ["Nairobi West-Kodi Rd/Equity/..."],
//       oneWay: "KSH 10000",
//       twoWay: "KSH 4758",
//     },
//     {
//       zone: "ZONE C",
//       estates: ["Kogo Plaza/Akiba United/Humayun/Miller/"],
//       oneWay: "KSH 10000",
//       twoWay: "KSH 1000",
//     },
//     {
//       zone: "ZONE D",
//       estates: ["Kogo Plaza/Akiba United/Humayun/Miller/"],
//       oneWay: "KSH 10000",
//       twoWay: "KSH 1000",
//     },
//     {
//       zone: "ZONE E",
//       estates: ["D.O.D Area, Yaya Phase 1 & 11, Hurligham, Kilimani"],
//       oneWay: "KSH 10000",
//       twoWay: "KSH 4563",
//     },
//   ];
  
//   export default function TransportTable() {
//     return (
//       <div className="flex justify-center items-center place-content-center place-items-center">
//         <Table className="w-full border-collapse bg-[#ebf2ed]">
//           <TableHeader>
//             <TableRow>
//               <TableHead className="text-start bg-gray-200 text-[#146e38] font-serif font-extrabold text-lg" colSpan={4}>
//                 TRANSPORT
//               </TableHead>
//             </TableRow>
//             <TableRow>
//               <TableHead className="text-center"></TableHead>
//               <TableHead className="text-center font-extrabold text-black">ESTATES</TableHead>
//               <TableHead className="text-right font-extrabold text-black w-40">ONE WAY</TableHead>
//               <TableHead className="text-right font-extrabold text-black">TWO WAY</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {transportData.map((item, index) => (
//               <TableRow key={index}>
//                 <TableCell className="font-extrabold text-black w-40">{item.zone}</TableCell>
//                 <TableCell className="text-center">{item.estates.join(", ")}</TableCell>
//                 <TableCell className="text-right">{item.oneWay}</TableCell>
//                 <TableCell className="text-right">{item.twoWay}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     );
//   }
  