import { useQuery } from "@tanstack/react-query";
import type { Photo } from "../types";

export const usePhotos = () => {
  return useQuery({
    queryKey: ["photos"],
    queryFn: async (): Promise<Photo[]> => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/list`);
      if (!response.ok) throw new Error("Görseller çekilemedi");
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
