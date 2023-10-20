import ProductScreen from "@/components/productScreen/ProductScreen";
import { requests } from "@/util/ApiRequests";

async function ItemPage({params}) {
    const getProductById = await requests.getProductById(params.items) 

    return ( <div className="w-full h-full pt-[80px] mb-20">
            <ProductScreen data={getProductById}/>
    </div> );
}

export default ItemPage;