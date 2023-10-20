"use client";
import Image from "next/image";
import { requests } from "../../util/ApiRequests";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdPending } from "react-icons/md";
import { MdDone } from "react-icons/md";

function MyOrderComponent() {
    const [dataorder, setDataOrder] = useState([]);

    useEffect(() => {
        const dataId = JSON.parse(localStorage.getItem("auth"));
        axios
            .get(
                `${process.env.NEXT_PUBLIC_BLABLA_URL}/getOrderByIDOfUser/${dataId.user._id}`
            )
            .then((res) => {
                setDataOrder(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function formatDateTime(dateTimeString) {
        const [datePart, timePart] = dateTimeString.split("T");
        const formattedDate = datePart;
        const formattedTime = timePart.split(".")[0]; // Removes milliseconds
        return `${formattedDate} ${formattedTime}`;
    }

    return (
        <div className=" h-full rounded-lg overflow-hidden">
            <div className=" w-full h-16 bg-primary px-8 py-2 text-2xl  text-white flex items-center">
                <span> Order History</span>
            </div>
            <div className=" bg-transpatent h-full  shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-y-scroll flex flex-col">
                <table>
                    <tbody className=" overflow-y-scroll">
                        {dataorder.map((order, index) => (
                            <tr
                                key={index}
                                className=" border-b-[1px] border-gray-300 p-4 text-sm h-16 text-center"
                            >
                                <td className=" p-4 mix-blend-multiply">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BLABLA_URL}/${order.product_id.image}`}
                                        width={30}
                                        height={30}
                                        alt=""
                                    />
                                </td>
                                <td className="text-gray-800">
                                    {" "}
                                    {order.product_id.name}{" "}
                                </td>
                                <td className="text-gray-800">
                                    {order.quantity}
                                </td>
                                <td className="text-gray-800">
                                    {order.total} ${" "}
                                </td>
                                <td
                                    className={`${
                                        order.isStatus 
                                            ? " text-green-500"
                                            : " text-yellow-500 "
                                    }
                            text-2xl `}
                                >
                                    {" "}
                                    {order.isStatus ? (
                                        <MdDone />
                                    ) : (
                                        <MdPending />
                                    )}{" "}
                                </td>
                                <td className="text-gray-800">
                                    {" "}
                                    {formatDateTime(order.createdAt)}{" "}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyOrderComponent;
