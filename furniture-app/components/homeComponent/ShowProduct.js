import Botton from "../botton/Botton";
import ProductCard from "../cards/product";

function ShowProduct() {
    const product = [1,1,1,1]
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
                {product.map((ele , index)=>{
                   return <ProductCard key={index}/>
                })}
            </div>
        </div>
    );
}

export default ShowProduct;
