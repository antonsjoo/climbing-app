"use client";
import RESTClient from "@/lib/RESTclient";
import { useQuery } from "@tanstack/react-query";

const fetchClimbingRoutes = async () => {
  try {
    const response = await RESTClient.get("/climbing-route");

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch climbing routes");
  }
};

export const useGetClimbingRoutes = () => {
  return useQuery({
    queryKey: ["climbingRoutes"],
    queryFn: fetchClimbingRoutes,
  });
};
