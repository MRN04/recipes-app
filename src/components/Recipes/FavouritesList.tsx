import { useEffect, useState } from "react"
import Image from "next/image"
import trash from "../../img/delete-svgrepo-com.svg"

export function FavouritesList() {

    const [favourites, setFavourites] = useState<string[]>([])
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favourites") ?? "string")
        if (data !== null) {
            setFavourites(data)
        }
    }, [])

    const removeFavourite = (recipe: object) => {
        const updatedFavourites = [...favourites.filter((item: any) => item !== recipe)]
        setFavourites(updatedFavourites)
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
    }

    interface Recipe {
        strMeal: string
        idMeal: string
        strMealThumb: string
        strInstructions: string
        strArea: string
        strCategory: string
    }
    
    if (favourites.length === 0) {
        return (
            <div>Ще немає вибраних улюблених рецептів(</div>
        )
    }
    else {
        return (
            <div className="flex flex-col gap-10 items-center">
            {favourites.map((Recipe: any) => 
                <div key={Recipe.idMeal} className="flex gap-[50px] items-center max-w-[1200px] w-full border border-[#000000] rounded-xl overflow-hidden">
                    <img className="max-w-[300px]" src={Recipe.strMealThumb} alt="img" />
                    <div className="flex flex-col gap-3">
                        <h3 className="text-4xl">{Recipe.strMeal}</h3>
                        <p>{Recipe.strInstructions}</p>
                        <div className="flex justify-between pr-4 pb-3">
                            <div className="flex gap-5 text-xl">
                                <p className="border border-[#000000] rounded-lg px-2">{Recipe.strCategory}</p>
                                <p className="border border-[#000000] rounded-lg px-2">{Recipe.strArea}</p>
                            </div>
                            <Image onClick={() => {removeFavourite(Recipe)}} src={trash} alt="image" className="max-w-[30px] cursor-pointer"/>
                        </div>
                    </div>
                </div>
            )}
            </div>
        )
    }
}