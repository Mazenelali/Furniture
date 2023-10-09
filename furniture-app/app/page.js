import Image from "next/image";
import Navbar from "../components/NavBar";
import ProductCard from "@/components/cards/product";
import HeroSection from "@/components/herosection/HeroSection";
import SearchInput from "@/components/search /SearchInput";

export default function Home() {
    return (
        <main className="  bg-[#f5f5f5]">
            <HeroSection />
            <div className="w-full px-32 py-20 flex ">
                <div className=" basis-1/2 p-10 ">
                    <p className=" text-gray-900 text-5xl">Why Choose Us</p>
                    <p className=" text-gray-800 pt-10 ">
                        {" "}
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate velit imperdiet dolor
                        tempor tristique.{" "}
                    </p>
                    <div className=" grid grid-cols-2 gap-10 pt-10 text-gray-600">
                        <div>
                            <Image
                                src="/assets/images/truck.svg"
                                width={70}
                                height={70}
                                alt=""
                            />
                            <p className=" flex flex-col pt-5 gap-1">
                                <span className=" text-lg text-gray-900">
                                    Fast & Free Shipping
                                </span>
                                <span>
                                    {" "}
                                    Donec vitae odio quis nisl dapibus
                                    malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate.
                                </span>
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/assets/images/bag.svg"
                                width={70}
                                height={70}
                                alt=""
                            />
                            <p className=" flex flex-col pt-5 gap-1">
                                <span className=" text-lg text-gray-900">
                                    Easy to Shop{" "}
                                </span>{" "}
                                <span>
                                    Donec vitae odio quis nisl dapibus
                                    malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate.
                                </span>
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/assets/images/support.svg"
                                width={70}
                                height={70}
                                alt=""
                            />
                            <p className=" flex flex-col pt-5 gap-1">
                                <span className=" text-lg text-gray-900">
                                    24/7 Support{" "}
                                </span>{" "}
                                <span>
                                    Donec vitae odio quis nisl dapibus
                                    malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate.
                                </span>
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/assets/images/return.svg"
                                width={70}
                                height={70}
                                alt=""
                            />
                            <p className=" flex flex-col pt-5 gap-1">
                                <span className=" text-lg text-gray-900">
                                    {" "}
                                    Hassle Free Returns{" "}
                                </span>{" "}
                                <span>
                                    Donec vitae odio quis nisl dapibus
                                    malesuada. Nullam ac aliquet velit. Aliquam
                                    vulputate.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" basis-1/2 relative">
                    <Image
                        src="/assets/images/dots-yellow.svg"
                        className=" w-[500px] h-[500px]  absolute "
                        width={300}
                        height={500}
                    />
                    <Image
                        src="/assets/images/why-choose-us-img.jpg"
                        className=" w-full p-24 relative z-10 rounded-[200px] "
                        width={300}
                        height={500}
                    />
                </div>
            </div>
        </main>
    );
}
