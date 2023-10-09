"use client";
import Link from "next/link";
import { useState } from "react";
import {useRouter} from 'next/router'


function Navbar() {
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
        <nav className="w-full h-24 flex absolute top-0 z-20">
            <div className=" basis-1/5 text-3xl flex items-center justify-center ">
                My furino
            </div>
            <div className="basis-3/5 flex justify-center items-center gap-10 text-lg text-second ">
                {links.map(({ name, path }, index) => (
                    <div key={index}>
                        {" "}
                        <Link
                            href={path}
                            className={() => {
                                true
                                    ? `text-yellow-400 `
                                    : undefined;
                            }}
                        >
                            {name}
                        </Link>{" "}
                    </div>
                ))}
            </div>
            <div className=" basis-1/5"></div>
        </nav>
    );
}

export default Navbar;
