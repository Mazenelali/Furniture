import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";

function Layout({children}) {
    return ( <>
    <Navbar/>
    <div className=" bg-[#F5F5F5]">
    {children}
    </div>
    <Footer/>
    </> );
}

export default Layout; 