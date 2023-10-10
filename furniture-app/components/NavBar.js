"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Shop",
            path: "/shop",
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
            className={`w-full h-20 flex absolute top-0 z-20 transition duration-300 bg-transparent`}
        >
            <div className="basis-1/5 text-5xl flex items-center text-white font-extrabold justify-center">
                <Link href="/"> My furino</Link>
            </div>
            <div className="basis-3/5 flex justify-center items-center gap-10 text-lg text-second">
                {links.map(({ name, path }, index) => (
                    <div key={index}>
                        {" "}
                        <Link href={path} passHref>
                            {name}
                        </Link>{" "}
                    </div>
                ))}
            </div>
            <div className="basis-1/5 flex items-center justify-center text-second text-2xl gap-10 cursor-pointer">
                <CgProfile />
                <SlBasket />
            </div>
        </nav>
    );
}

export default Navbar;
