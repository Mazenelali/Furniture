import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import {MdFavorite} from "react-icons/md"

function ProductCard() {
    return (
        <div className="w-64 min-h-[450px] flex items-end relative">
            <div className="group w-64 h-full flex gap-2 hover:gap-8 transition-all flex-col  ">
                <div className="w-full basis-3/5">
                    <Image
                        src="https://i.pinimg.com/564x/1f/ee/3d/1fee3d1881d3f81dcf12d5e5d94b3466.jpg"
                        alt=""
                        className="w-full h-full"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="absolute bottom-0 w-full h-0 bg-slate-600 opacity-10 rounded-2xl transition-all group-hover:h-[300px]"></div>
                <div className="w-14 h-14 rounded-full absolute -bottom-5 right-[35%]  translate-x-1/2 translate-y-1/2  bg-transparent  transition-all flex items-center justify-center group-hover:bg-primary group-hover:-bottom-8 ">
                <FaPlus className=" text-transparent group-hover:text-white text-2xl" />
                </div>
                <div className="w-14 h-14 rounded-full absolute -bottom-5 right-[70%]  translate-x-1/2 translate-y-1/2  bg-transparent  transition-all flex items-center justify-center group-hover:bg-primary group-hover:-bottom-8 ">
                <MdFavorite className=" text-transparent group-hover:text-white text-2xl" />
                </div>

                <div className="basis-2/5 text-center">
                    <p className="font-bold text-2xl">The best chairs here</p>
                    <p className="font-semibold text-xl mt-2">$20</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
