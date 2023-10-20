"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios"; 
import ShopingCartTable from "@/components/shoppingCartTable/ShopingCartTable";
import MyOrderComponent from "@/components/myOrderComponent/MyOrderComponent";


function Basket() {
    const [getMyBasket, setMyBasket] = useState([]);
    const [dataTotal, setDataTotal] = useState(0);
    const [dataUser , setDataUser] = useState(null)

    useEffect(() => {
        dataBasket()
        userData()
    }, []);

    const dataBasket = ()=>{
        const basketData = JSON.parse(localStorage.getItem("MyBasket"));
        setMyBasket(basketData);
    }

    const userData= ()=>{
        const dataUser = JSON.parse(localStorage.getItem("auth"));
        setDataUser(dataUser)
    }

    useEffect(() => {
        let data = 0;
        for (let i = 0; i < getMyBasket.length; i++) {
            data = data + getMyBasket[i].price;
        }
        setDataTotal(data);
    }, [getMyBasket]);

    function orderSubmit(order) {
        for (let i = 0; i < order.length; i++) {
            axios
                .post(`${process.env.NEXT_PUBLIC_BLABLA_URL}/addOrder`, {
                    user_id: dataUser.user._id,
                    product_id: order[i]._id,
                    quantity: order[i].quantity,
                    total: order[i].price,
                    isStatus: false,
                })
                .then((res) => {
                    console.log(res);
                });
        }
    }

    return (
        <div className="w-full h-screen pt-[80px] flex">
            <div className="w-[60%] h-[90%] p-10 flex flex-col justify-around">
                <ShopingCartTable
                    data={getMyBasket}
                    orderSubmit={orderSubmit}
                    dataBasket = {dataBasket}
                />
                <div className="flex justify-between items-center">
                    <Link
                        href="/shop/all-items"
                        className="w-1/4 text-center flex items-center justify-center gap-2 text-2xl cursor-pointer"
                    >
                        <IoIosArrowBack />
                        Continue shopping
                    </Link>
                    <div className="flex flex-col w-1/4">
                        <div className="flex gap-2">
                            <p className="text-1xl text-gray-800">Total :</p>
                            <p>{dataTotal} $</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-1xl text-gray-800">Shipping :</p>
                            <p> No Fee</p>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <p className="text-2xl text-gray-800">Total :</p>
                            <p className="text-2xl">{dataTotal} $</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] h-[85%] p-10">
                <MyOrderComponent />
            </div>
        </div>
    );
}

export default Basket;
