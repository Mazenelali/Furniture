import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";

function Layout({children}) {
    return ( <>
    <Navbar/>
    {children}
    <Footer/>
    </> );
}

export default Layout; 