"use client"
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export function Header() {
    
    const {data, isLoading} = useQuery({
        queryKey: ["recipe"],
        queryFn: async () => {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            const data = await response.json()
            console.log(data);
            return data
        }
    })

    if (isLoading) {
        var mealId = ""
        var category = ""
    } else {
        var mealId = data.meals[0].idMeal
        var category = data.meals[0].strCategory
    }
    
    return (
        <header className="flex justify-between max-w-[1340px] m-auto px-5 py-10 items-center">
            <div className="text-[52px] font-bold">Cook.</div>
            <nav className="flex gap-5 text-xl">
                <Link href="/" className="hover:text-[#f48a00] transition-all duration-200">Home</Link>
                <Link href="/" className="hover:text-[#f48a00] transition-all duration-200">About us</Link>
                <Link href="/recipes" className="hover:text-[#f48a00] transition-all duration-200">Recipes</Link>
                <Link href="/favourites" className="hover:text-[#f48a00] transition-all duration-200">Favourites</Link>
            </nav>
            <Link href={`/recipes/${category}/${mealId}`} className="px-4 py-2 bg-secondary rounded-lg text-textSecondary font-medium">Random recipe</Link>
        </header>
    )
}