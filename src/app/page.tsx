"use client";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { useGetClimbingRoutes } from "@/hooks/useGetClimbingRoutes";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

export default function Home() {
  const { data: climbingRoutes } = useGetClimbingRoutes();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Table className="w-full">
        <TableCaption>A list of your recent routes.</TableCaption>
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
              <TableCell className="font-medium">{route.grade}</TableCell>
              <TableCell className="text-left">{route.setter}</TableCell>
              <TableCell>{route.opinion_grade}</TableCell>
              <TableCell className="text-left">{route.color}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
