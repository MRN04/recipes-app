"use client"
import { FavouritesList } from "@/components";

export default function Page() {
  
  return (
    <div className="flex flex-col gap-[100px] mt-[50px] max-w-[1340px] px-5 mx-auto">
      <FavouritesList />
    </div>
  );
}
