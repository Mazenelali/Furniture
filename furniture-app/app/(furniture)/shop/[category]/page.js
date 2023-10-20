import SideBarOfShop from "@/components/sideBarOfShop/SideBarOfShop";
import SearchInput from "@/components/search /SearchInput";
import ProductCard from "@/components/cards/product";
import { requests } from "../../../../util/ApiRequests";
import Link from "next/link";

async function Shop({params ,searchParams}) {
    const dataProduct = await requests.getAllProduct();

    const param = params.category;
    const searchParam = searchParams.name

    const dataProductByCategory = await requests.getProductByCategoryId(param);

    const searchProduct =  await requests.searchProduct(searchParam)

    function DataListing() {
        return (
            <>
                {dataProduct.length === 0  ||
                dataProductByCategory.status === 201 ? (
                    <div className=" h-screen text-3xl text-yellow-900">No data In this Category</div>
                ) : (
                    (param === "all-items"
                        ? dataProduct
                        : dataProductByCategory.data 
                    ).map((item, index) => (
                        <div
                            key={index}
                            className="h-[500px] w-full flex justify-center"
                        >
                            <ProductCard data={item} path={param} />
                        </div>
                    ))
                )}
            </>
        );
    }

    return (
        <div className=" flex w-full h-full">
            <SideBarOfShop param={param} />
            <div className=" w-[calc(100%-350px)] flex flex-col pt-28 pb-28 p-8">
                <div className=" flex justify-center">
                    <SearchInput path={param} />
                </div>
                <div className="w-full grid grid-cols-3 gap-10 p-7 mb-10 ">
                    <DataListing />
                </div>
            </div>
        </div>
    );
}

export default Shop;
