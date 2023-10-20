"use client"
import Image from "next/image";
import Botton from "../botton/Botton";
import { useState } from "react";

function ProductScreen({ data }) {

const [quantity , setQuantity] = useState(1) 



        // Add to basket
        function addToBasket() {
            const existingBasket =
                JSON.parse(localStorage.getItem("MyBasket")) || [];
            const isProductInBasket = existingBasket.some(
                (item) => item._id === data._id
            );
    
            if (isProductInBasket) {
                const updatedBasket = existingBasket.filter(
                    (item) => item._id !== data._id
                );
                localStorage.setItem("MyBasket", JSON.stringify(updatedBasket));
            } else {
                existingBasket.push({...data , quantity : Number(quantity)});
                localStorage.setItem("MyBasket", JSON.stringify(existingBasket));
                console.log("Product added to the basket.");
            }
        }

    return (
        <div className="px-10 mt-6 flex flex-col">
            <div className="flex">
                <div className="w-1/2 flex items-center justify-center mix-blend-multiply">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BLABLA_URL}/${data.image}`}
                        width={300}
                        height={300}
                        className="w-3/4 h-3/4 object-contain rounded-lg"
                        alt=""
                    />
                </div>
                <div className="w-1/2 p-7 flex flex-col gap-7">
                    <p className="text-3xl uppercase text-yellow-950 font-bold tracking-widest">
                        {data.name}
                    </p>
                    <p className="text-lg text-gray-700">{data.description}</p>
                    <p className="text-gray-700 text-2xl font-bold">
                        $ {data.price}
                    </p>
                    <div className="flex gap-3 items-baseline">
                        <p className="uppercase font-bold text-yellow-950 text-1xl">
                            Availability:
                        </p>
                        <p className="first-letter:uppercase text-xl text-gray-700">
                            In stock
                        </p>
                    </div>
                    <div className="flex gap-3 items-baseline">
                        <p className="uppercase font-bold text-yellow-950 text-1xl">
                            Category:
                        </p>
                        <p className="first-letter:uppercase text-xl text-gray-700">
                            {data.category_id.name}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <p className="uppercase font-bold text-yellow-950 text-1xl">
                            Choose quantity:
                        </p>
                        <input
                            type="number"
                            defaultValue={quantity}
                            className="w-20 border-b-2 border-primary"
                            onChange={(e)=>(e.target.value < 0 ? setQuantity(1) : setQuantity(e.target.value))}
                        />
                        <p className=" text-yellow-900"> {quantity * data.price } $</p>
                    </div>
                    <div>
                        <Botton text="Add to cart" onClick={addToBasket} />
                    </div>
                </div>
            </div>
            <div className="w-full">{/* Section 3 content here */}</div>
        </div>
    );
}

export default ProductScreen;
