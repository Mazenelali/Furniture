"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SlBasket } from "react-icons/sl";

function BasketIcon() {
    const [numberItem, setNumberItems] = useState(0);

    const dataBasket = () => {
        const NumberOfItems = JSON.parse(localStorage.getItem("MyBasket")) 
        setNumberItems(NumberOfItems.length);
    };

    useEffect(()=>{
        dataBasket()
    },[JSON.parse(localStorage.getItem("MyBasket"))])

    return (
        <div className=" relative z-10 ">
            <div className="w-5 h-5  bg-yellow-600 rounded-full absolute -top-3 -right-3 text-sm flex items-center justify-center">
                {" "}
                <span>{numberItem}</span>{" "}
            </div>
            <SlBasket />
        </div>
    );
}

export default BasketIcon;
