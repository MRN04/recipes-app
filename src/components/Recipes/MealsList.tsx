"use client"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function MealsList() {
    
    const { id } = useParams()
    const [recipes, setRecipes] = useState([])
    
    const {data, isLoading} = useQuery({
        queryKey: ["recipes"],
        queryFn: async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
            const data = await response.json()
            console.log(data);
            return data
        }
    })

    useEffect(() => {
        if (!isLoading) {
            setRecipes(data.meals)
        }
    }, [data])

    interface Recipe {
        strMeal: string
        idMeal: string
        strMealThumb: string
    }
    
    if (isLoading) {
        return <div>loading</div>
    }
    if (!recipes || recipes.length === 0) {
        return <div>No recipes found for category: {id}</div>;
      }
    else {
        return (
            <div>
                <h2 className="text-5xl font-medium mb-10">All {id} recipes:</h2>
                <div className="flex gap-10 flex-wrap justify-center">
                {recipes.map((Recipe: any) => 
                    <Link href={`/recipes/${id}/${Recipe.idMeal}`} key={Recipe.idMeal} className="bg-secondary bg-opacity-10 group relative">
                        <img src={Recipe.strMealThumb} className="max-w-[300px]"/>
                        <p className="opacity-0 group-hover:opacity-100 duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 font-semibold text-xl">{Recipe.strMeal}</p>
                        <div className="bg-black w-full h-full absolute top-0 right-0 opacity-0 group-hover:opacity-50 duration-200"></div>
                    </Link>
                )}
                </div>
            </div>
        )
    }
}