"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export function Recipe() {
  const meal = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.meal}`
      );
      const data = await response.json();
      console.log(data);
      return data;
    },
  });

  const addToFavourites = () => {
    const favourites = JSON.parse(localStorage.getItem("favourites") ?? "[]")
    if (favourites == "nema") {
      localStorage.setItem("favourites", JSON.stringify([data.meals[0]]))
    }
    else {
      localStorage.setItem("favourites", JSON.stringify([...favourites, data.meals[0]]))
    }
  };

  if (isLoading) return <div>loading</div>;
  else
    return (
      <div className="flex justify-between">
        <img
          className="max-w-[550px]"
          src={data.meals[0].strMealThumb}
          alt="img"
        />
        <div className="max-w-[550px] flex flex-col gap-8 justify-center">
          <h2>{data.meals[0].strMeal}</h2>
          <p>{data.meals[0].strInstructions}</p>
          <button
            onClick={addToFavourites}
            className="px-4 py-2 bg-secondary rounded-lg text-textSecondary font-medium"
          >
            add to favourites
          </button>
        </div>
      </div>
    );
}
