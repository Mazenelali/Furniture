function HeroSection() {
    return (
        <div
            className="w-full h-[850px] bg-cover relative"
            style={{
                backgroundImage:
                    "url(https://a-static.besthdwallpaper.com/yellow-corner-sofa-set-and-warm-and-modern-living-room-wallpaper-2560x1080-92156_14.jpg)",
            }}
        >
            <div className="absolute inset-0 mb-52 mr-14 flex items-center justify-center text-white text-center">
                <div className="bg-opacity-70 p-6 rounded-lg">
                    <h1 className="text-5xl font-bold mb-4">
                        Elevate Your Space with Elegance
                    </h1>
                    <p className="text-xl mb-8">
                        Discover our exclusive collection of handcrafted
                        furniture.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-primary text-white hover:bg-primary-dark font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Explore
                        </button>
                        <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center mb-8">
                <p className="text-xl text-white">
                    Limited Time Offer: Get 20% Off Your First Purchase!
                </p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <a
                    href="#featured-products"
                    className="text-white text-3xl hover:text-primary transition duration-300 ease-in-out"
                >
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    );
}

export default HeroSection;
