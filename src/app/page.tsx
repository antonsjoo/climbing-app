"use client";

import { DialogDemo } from "@/components/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGetClimbingRoutes } from "@/hooks/useGetClimbingRoutes";

export default function Home() {
  const { data: climbingRoutes } = useGetClimbingRoutes();
  return (
    <main className="flex min-h-screen flex-col items-start space-y-10 sm:p-24 p-4">
      <h1 className="text-xl font-bold mb-8">bulder.</h1>
      <DialogDemo />
      <h3 className="font-bold">All routes</h3>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Route</TableHead>
            <TableHead className="text-left">Setter</TableHead>
            <TableHead className="text-left">Grade</TableHead>
            <TableHead className="text-left">Color</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {climbingRoutes?.map((route) => (
            <TableRow key={route.name}>
              <TableCell className="font-medium">{route.name}</TableCell>

              <TableCell className="text-left">{route.setter}</TableCell>
              <TableCell>{route.grade}</TableCell>
              <TableCell className="text-left">{route.color}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
