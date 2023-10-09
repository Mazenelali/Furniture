import { ImSearch } from "react-icons/im";

function SearchInput() {
    return (
        <div className="  flex h-14 w-[600px] justify-end items-center  bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full ">
            <input
                type="text"
                className=" basis-[80%] mr-2 placeholder:text-xs placeholder:text-gray-500 "
                placeholder="Discover our exclusive collection"
            />
            <label className="mr-1 h-12 w-12 bg-primary hover:bg-white hover:text-primary transition-all rounded-3xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-white ">
                {" "}
                <ImSearch />{" "}
            </label>
        </div>
    );
}

export default SearchInput;
