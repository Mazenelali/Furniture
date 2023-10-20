"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";
import Botton from "./botton/Botton";
import BasketIcon from "./basketIcon/BasketIcon";

function Navbar() {
    const pathname = usePathname();
    const [dataUser, setDataUser] = useState(null);

    const userData = () => {
        if (typeof localStorage !== "undefined") {
            setDataUser(JSON.parse(localStorage.getItem("auth")));
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
        userData();
    }, []);

    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Shop",
            path: "/shop/all-items",
        },
        {
            name: "Services",
            path: "/services",
        },
        {
            name: "About us",
            path: "/aboutUs",
        },
        {
            name: "Contact us",
            path: "/contactUs",
        },
    ];

    return (
        <nav
            className={`w-full h-20 flex absolute ${
                pathname === "/"
                    ? "bg-transparent"
                    : "bg-yellow-800 bg-opacity-75"
            } top-0 z-20 transition duration-300 bg-transparent`}
            data-aos="fade-down"
        >
            <div className="basis-1/5 text-5xl flex items-center text-white font-extrabold justify-center">
                <Link href="/">My furino</Link>
            </div>
            <div className="basis-3/5 flex justify-center items-center gap-10 text-lg text-second">
                {links.map(({ name, path }, index) => (
                    <div key={index}>
                        <Link href={path}>{name}</Link>
                    </div>
                ))}
            </div>
            {dataUser ? (
                <div className="basis-1/5 flex items-center justify-center text-second text-2xl gap-10 cursor-pointer">
                    <Link href="/profile">
                        <CgProfile />
                    </Link>
                    <Link href="/basket">
                        <BasketIcon />
                    </Link>
                </div>
            ) : (
                <div className="flex items-center w-40 justify-center">
                    <Link
                        href="/login"
                        className="bg-primary border text-white hover:bg-white hover:text-primary font-light  px-4 py-1 rounded-full text-sm transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
