"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

function ProductCard({ data ,path }) {
    const [iconBasket, setIconofBasket] = useState(false);
    const [iconFavorite, setIconFavorite] = useState(false);

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
            setIconofBasket(false);
        } else {
            existingBasket.push({...data , quantity :1});
            localStorage.setItem("MyBasket", JSON.stringify(existingBasket));
            console.log("Product added to the basket.");
            setIconofBasket(true);
        }
    }

    useEffect(() => {
        const basketData = JSON.parse(localStorage.getItem("MyBasket"));
        const isProductInBasket =
            basketData && basketData.some((item) => item._id === data._id);
        if (isProductInBasket) {
            setIconofBasket(true);
        } else {
            setIconofBasket(false);
        }
    }, [data._id]);

    // Add to favorite
    function addToFavorite() {
        const existingFavorite =
            JSON.parse(localStorage.getItem("MyFavorite")) || [];
        const isProductInFavorite = existingFavorite.some(
            (item) => item._id === data._id
        );

        if (isProductInFavorite) {
            const updatedFavorite = existingFavorite.filter(
                (item) => item._id !== data._id
            );
            localStorage.setItem("MyFavorite", JSON.stringify(updatedFavorite));
            setIconFavorite(false);
        } else {
            existingFavorite.push(data);
            localStorage.setItem(
                "MyFavorite",
                JSON.stringify(existingFavorite)
            );
            console.log("Product added to favorites.");
            setIconFavorite(true);
        }
    }

    useEffect(() => {
        const favoriteData = JSON.parse(localStorage.getItem("MyFavorite"));
        const isProductInFavorite =
            favoriteData && favoriteData.some((item) => item._id === data._id);
        if (isProductInFavorite) {
            setIconFavorite(true);
        } else {
            setIconFavorite(false);
        }
    }, [data._id]);

    return (
        <div className="w-64 min-h-[500px] flex  relative">
            <div className="group w-64 h-full flex justify-end gap-2 hover:gap-8 transition-all flex-col  ">
                <Link
                    href={`/shop/${path}/${data._id}`}
                    className="w-full relative z-10 h-full basis-3/5 mix-blend-multiply "
                >
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BLABLA_URL}/${data.image}`}
                        alt=""
                        className="w-full h-full rounded-md"
                        width={300}
                        height={300}
                    />
                </Link>
                <div className="absolute bottom-0 w-full h-0 bg-slate-600 opacity-10 rounded-2xl transition-all group-hover:h-[300px]"></div>
                <div
                    onClick={addToBasket}
                    className="w-14 h-14 rounded-full absolute -bottom-5 right-[35%] cursor-pointer  translate-x-1/2 translate-y-1/2  bg-transparent  transition-all flex items-center justify-center group-hover:bg-primary group-hover:-bottom-8 "
                >
                    <FaPlus
                        className={`text-transparent  ${
                            iconBasket
                                ? "group-hover:text-yellow-900"
                                : "group-hover:text-white"
                        } text-2xl`}
                    />
                </div>
                <div
                    onClick={addToFavorite}
                    className="w-14 h-14 rounded-full absolute -bottom-5 right-[70%] cursor-pointer translate-x-1/2 translate-y-1/2  bg-transparent  transition-all flex items-center justify-center group-hover:bg-primary group-hover:-bottom-8 "
                >
                    <MdFavorite
                        className={`text-transparent ${
                            iconFavorite
                                ? "group-hover:text-yellow-900"
                                : "group-hover:text-white"
                        } text-2xl`}
                    />
                </div>

                <Link
                    href={`/shop/${data._id}`}
                    className="basis-1/5 flex relative z-10 flex-col justify-end  text-center"
                >
                    <p className="font-bold text-2xl">{data.name}</p>
                    <p className="font-semibold text-xl mt-2">${data.price}</p>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
