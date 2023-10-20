import { requests } from "../../util/ApiRequests";
import Image from "next/image";
import Link from "next/link";

async function SideBarOfShop({param}) {

    const getdataCategory = await requests.getAllCategory();

    return (
        <div className="bg-white w-[350px]  mt-[80px] p-[20px] flex flex-col gap-5 ">
            <div className=" fixed flex flex-col gap-5 z-10 bg-white  ">
                <div className=" flex flex-col gap-5">
                    <div className="min-h-[200px] w-[290px]  flex flex-col gap-5">
                        <p className=" uppercase text-yellow-900 font-bold text-2xl">
                            {" "}
                            categories{" "}
                        </p>

                        <Link
                        href={`/shop/all-items`} 
                        className=" flex gap-2 items-center">
                            <Image
                                src={`https://i.pinimg.com/236x/cb/38/e3/cb38e3f1d5e242650390dd4d0a30f0fc.jpg`}
                                className=" basis-1/6 rounded-md"
                                width={30}
                                height={30}
                                alt=""
                            />
                            <div
                                
                                className={`px-4 py-2 text-xl ${
                                    param == "all-items"
                                        ? "border-r-2 border-yellow-800 text-yellow-800 "
                                        : " text-gray-700"
                                }  cursor-pointer basis-5/6 first-letter:uppercase tracking-wider`}
                            >
                                {" "}
                                All items
                            </div>
                        </Link>
                        {(!getdataCategory ? [] : getdataCategory.data).map(
                            (ele, index) => {
                                return (
                                    <Link
                                        href={`/shop/${ele.name}`}
                                        key={index}
                                        className=" flex gap-2 items-center"
                                    >
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BLABLA_URL}/${ele.image}`}
                                            className=" basis-1/6"
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <p
                                            key={index}
                                            className={`px-4 py-2 cursor-pointer ${
                                                param == ele.name
                                                    ? "border-r-2 border-yellow-800 text-yellow-800 "
                                                    : " text-gray-700"
                                            } text-xl first-letter:uppercase basis-5/6 tracking-wider`}
                                        >
                                            {ele.name}
                                        </p>
                                    </Link>
                                );
                            }
                        )}
                    </div>
                </div>
                <div className=" flex flex-col gap-5">
                    <p className=" uppercase text-yellow-900 font-bold text-2xl">
                        {" "}
                        sort by
                    </p>
                    <div className="flex flex-col  min-h-[200px] gap-2">
                        {(!getdataCategory ? [] : getdataCategory.data).map(
                            (ele, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=" px-4 py-2 text-xl first-letter:uppercase tracking-wider"
                                    >
                                        {" "}
                                        {ele.name}{" "}
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBarOfShop;
