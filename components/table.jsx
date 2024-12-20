import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
export default function FeeTable(){
    return <div>
         <Table className="w-full border-collapse bg-[#ebf2ed]">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-start bg-gray-200 text-[#146e38] font-serif font-extrabold text-lg" colSpan={10}>
                    TERMLY FEES PER CHILD
                  </TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="text-center"></TableHead>
        
                  <TableHead className="text-center font-extrabold text-black bg-red-100" colSpan={2}>
                    MANDATORY
                  </TableHead>
                  
                  <TableHead className="text-center font-extrabold text-black bg-green-100" colSpan={7}>
                    OPTIONAL CHARGES
                  </TableHead>
                </TableRow>
                <TableRow>
                  <TableHead className="text-center"></TableHead>
                  <TableHead className="text-center font-extrabold text-black">TUITION</TableHead>
                  <TableHead className="text-center"></TableHead>
                  <TableHead className="text-right font-extrabold text-black">LUNCH</TableHead>
                  <TableHead className="text-right font-extrabold text-black">TRANSPORT</TableHead>
                  <TableHead className="text-center"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-extrabold text-black">PLAYGROUP</TableCell>
                  <TableCell className="text-center">KSH 30,000</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">See rates below</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">PP1</TableCell>
                  <TableCell className="text-center">KSH 30,000</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">See rates below</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">PP2, GRADE 1-2</TableCell>
                  <TableCell className="text-center">KSH 30,000</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">See rates below</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">GRADE 3-4</TableCell>
                  <TableCell className="text-center">KSH 30,000</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">See rates below</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">STANDARD 5-6</TableCell>
                  <TableCell className="text-center">KSH 30,000</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">See rates below</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-extrabold text-black">STANDARD 7-8</TableCell>
                  <TableCell className="text-center">KSH 30,000</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right">KSH 10000</TableCell>
                  <TableCell className="text-right">See rates below</TableCell>
                </TableRow>
               
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          
    </div>
}