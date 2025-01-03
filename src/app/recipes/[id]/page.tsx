"use client"
import MealsList from "@/components/Recipes/MealsList"

export default function Page() {
    
    return (
        <div className="flex flex-col gap-[100px] mt-[50px] max-w-[1340px] px-5 mx-auto">
            <MealsList />
        </div>
    )
}