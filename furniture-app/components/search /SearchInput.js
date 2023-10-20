"use client"
import Link from "next/link";
import { useState } from "react";
import { ImSearch } from "react-icons/im";


function SearchInput({path}) {
    const [search , setSearch ] = useState("")
    return (
        <div className="  flex h-14 w-[600px] justify-end items-center  bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full ">
            <input
                type="text"
                className=" basis-[80%] mr-2 placeholder:text-xs placeholder:text-gray-500 "
                placeholder="Discover our exclusive collection"
                onChange={(e)=>setSearch(e.target.value)}
            />
            <Link
            href={{ pathname: `/shop/${path}`, query: { name: search } }}
            className="mr-1 h-12 w-12 cursor-pointer bg-primary hover:bg-white hover:text-primary transition-all rounded-3xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-white ">
                {" "}
                <ImSearch />{" "}
            </Link>
        </div>
    );
}

export default SearchInput;
