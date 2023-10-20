"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Botton from "../botton/Botton";
import {MdCancel} from "react-icons/md"

function ShopingCartTable({ data  , orderSubmit , dataBasket}) {
    const [order, setOrder] = useState([]);

    const handleSelectItem = (item) => {
        setOrder((prevOrder) => [...prevOrder, item]);
    };
    
    const handleDeselectItem = (item) => {
        setOrder((prevOrder) =>
            prevOrder.filter((selectedItem) => selectedItem !== item)
        );
    };

    return (
        <div className="flex flex-col">
            <div className="h-16 rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center">
                <p className="p-2 pl-6 text-lg text-gray-800 basis-2/5">
                    Product
                </p>
                <p className="p-2 text-lg text-gray-800 basis-1/5">Quantity</p>
                <p className="p-2 text-lg text-gray-800 basis-1/5">
                    Total Price
                </p>
                <p className="p-2 basis-1/5 flex justify-center">
                    <Botton text="CHEKOUT" onClick={()=>orderSubmit(order)}/>
                </p>
            </div>
            <div className="overflow-y-scroll scroll-smooth">
                {data.map((item, index) => (
                    <div key={index}>
                        <Row
                            data={item}
                            isSelected={order.includes(item)}
                            onSelect={handleSelectItem}
                            onDeselect={handleDeselectItem}
                            dataBasket = {dataBasket}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopingCartTable;

function Row({ data, isSelected, onSelect, onDeselect ,dataBasket}) {


    function handelRemoveFromBAsket(id) {
        const getMyBasket = JSON.parse(localStorage.getItem("MyBasket") || []);
        const dataBasketUpdated = getMyBasket.filter((ele, index) => {
            return ele._id != id;
        });
        localStorage.setItem("MyBasket",JSON.stringify(dataBasketUpdated));
    }
    


    return (
        <div className="h-16 border-b-[1px] border-gray-300 flex items-center">
            <div>
                <input
                    type="checkbox"
                    className="h-5 w-5 text-primary border-primary"
                    checked={isSelected}
                    onChange={() =>
                        isSelected ? onDeselect(data) : onSelect(data)
                    }
                />
            </div>
            <div className="flex gap-2 basis-2/5 items-center px-4">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BLABLA_URL}/${data.image}`}
                    width={50}
                    height={50}
                    alt=""
                    className="mix-blend-multiply"
                />
                <p className="text-gray-800">{data.name}</p>
            </div>
            <div className="basis-1/5 flex pr-4">
                <div className="flex items-center w-full justify-around">
                    <input
                        type="number"
                        defaultValue={data.quantity}
                        className="w-24 bg-transparent"
                    />
                </div>
            </div>
            <div className="basis-1/5 pl-4">
                <p className="text-gray-800 text-lg"> {data.price} $ </p>
            </div>
            <div className="basis-1/5 w-full flex justify-center">
                <p className="text-primary text-4xl font-extralight cursor-pointer" onClick={()=>{handelRemoveFromBAsket(data._id) ; dataBasket()}}>
                    <MdCancel/>
                </p>
            </div>
        </div>
    );
}
