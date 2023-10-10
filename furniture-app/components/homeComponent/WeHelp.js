"use client"
import Image from "next/image";
import Botton from "../botton/Botton";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WeHelp() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);
    return (
        <div className="w-full flex justify-between min-h-[900px] relative px-32 py-20 mb-18">
            <Image
                src="/assets/images/dots-green.svg"
                width={400}
                height={400}
                className=" absolute -top-20 -left-10"
            />
            <div
                className=" basis-[40%] w-[400px] bg-cover bg-center rounded-[20px] relative"
                style={{
                    backgroundImage: `url("/assets/images/img-grid-1.jpg")`,
                    width: "400px",
                    height: "700px",
                }}
            >
                <div
                    className="bg-cover bg-center rounded-[20px] absolute -right-[280px] "
                    style={{
                        backgroundImage: `url("/assets/images/img-grid-2.jpg")`,
                        width: "250px",
                        height: "250px",
                    }}
                ></div>
                <div className="w-[200px] h-[450px]">
                    <div
                        className="bg-cover bg-center rounded-[20px] absolute -right-[280px] -bottom-20 "
                        style={{
                            backgroundImage: `url("/assets/images/img-grid-3.jpg")`,
                            width: "390px",
                            height: "500px",
                        }}
                    ></div>
                </div>
            </div>
            <div className="basis-[40%] flex flex-col gap-20 p-20">
                <p className=" text-5xl text-gray-900 " data-aos="fade-left">
                    We Help You Make Modern Interior Design
                </p>
                <p className=" text-gray-600 " data-aos="fade-left" >
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada Donec vitae odio quis nisl dapibus malesuada Donec
                    vitae odio quis nisl dapibus malesuada Donec vitae odio quis
                    nisl dapibus malesuada Donec vitae odio quis nisl dapibus
                    malesuada
                </p>
                <Botton text="Explore" data-aos="fade-left"/>
            </div>
        </div>
    );
}

export default WeHelp;
