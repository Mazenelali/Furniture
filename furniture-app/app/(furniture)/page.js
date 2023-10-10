import HeroSection from "@/components/herosection/HeroSection";
import WhyChooseUs from "@/components/homeComponent/WhyChooseUs";
import ShowProduct from "@/components/homeComponent/ShowProduct";
import WeHelp from "@/components/homeComponent/WeHelp";

export default function Home() {
    return (
        <main className="  bg-[#f5f5f5]">
            <HeroSection />
            <ShowProduct />
            <WhyChooseUs />
            <WeHelp />
        </main>
    );
}
