import Botton from "../botton/Botton";
import ProductCard from "../cards/product";
import {requests} from "../../util/ApiRequests"

async function ShowProduct() {

    const data = await requests.getFirstProduct()

    return (
        <div className=" w-full gap-10 min-h-[600px] py-20 pt-32   flex px-40">
            <div className=" basis-1/5">
                <p className=" text-gray-800 text-5xl">
                    Crafted with excellent material.
                </p>
                <p className=" my-10  text-gray-700">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                </p>
                <Botton text="Explore"/>
            </div>
            <div className=" basis-4/5 flex justify-between">
                {data.data.map((ele , index)=>{
                    return <ProductCard key={index} data={ele}/>
                })}
            </div>
        </div>
    );
}

export default ShowProduct;
