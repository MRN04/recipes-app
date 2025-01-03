"use client"

import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function CategoriesList() {

    const [allCategories, setAllCategories] = useState([])

    const {data, isLoading} = useQuery({
        queryKey: ["recipes"],
        queryFn : async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            const data = await response.json()
            return data
        }
    })

    useEffect(() => {
        if (!isLoading) {
            setAllCategories(data.categories)
        }
    }, [data])

    interface category {
        strCategory: string,
        strCategoryThumb: string
    }

    if (isLoading) return (
        <div>loading...</div>
    )
    else return (
        <div>
            <div className="text-5xl font-medium mb-10">Categories:</div>
            <div className="flex flex-wrap gap-8 justify-center">
            {allCategories.map((category: any) =>
                <Link href={`/recipes/${category.strCategory}`} key={category.strCategory} className="bg-secondary bg-opacity-10 group relative">
                    <img src={category.strCategoryThumb} className="max-w-[300px]"/>
                    <p className="opacity-0 group-hover:opacity-100 duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 font-semibold text-xl">{category.strCategory}</p>
                    <div className="bg-black w-full h-full absolute top-0 right-0 opacity-0 group-hover:opacity-50 duration-200"></div>
                </Link>
                
            )}
            </div>
        </div>
    )
}