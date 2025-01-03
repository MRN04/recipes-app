import Image from "next/image";
import blockImage from "../../img/block-1-img.png"

export function FirstBlock() {


    return (
        <div className="flex gap-10 justify-between items-center">
            <div className="flex flex-col gap-10">
                <h1 className="text-6xl font-bold max-w-[600px] leading-[110%]">Cook Like a Pro with Our <span className="text-secondary">Easy</span> and <span className="text-secondary">Tasty</span> Recipes</h1>
                <p className="max-w-[550px] leading-[110%] text-xl font-light">From quick and easy meals to gourments delights, we have something for every taste and occasion</p>
                <button className="px-4 py-2 bg-secondary rounded-lg text-textSecondary font-medium w-fit">Explore all Recipes</button>
            </div>
            <Image src={blockImage} alt="block-image" className="w-[600px]"/>
        </div>
    )
}