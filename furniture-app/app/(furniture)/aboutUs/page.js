import Link from "next/link";
import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-[#f5f5f5f5] text-white py-16 pt-[150px]">
            <div className="container mx-auto flex flex-wrap items-center justify-center">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <img
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp4.svg"
                        alt="Main Image"
                        className="w-80 md:w-full mx-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                    <div className="bg-yellow-800 bg-opacity-75 p-8 rounded-lg">
                        <p className="text-2xl font-extrabold mb-4">About Me</p>
                        <p className="text-4xl font-extrabold mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                        <p className="text-lg mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fermentum pulvinar ullamcorper suspendisse ac
                            eget. Pellentesque tempus leo in ullamcorper quis
                            vestibulum ligula elementum ut.
                        </p>
                        <Link
                            href="/shop/all-items"
                            className="text-lg py-2 px-6 text-primary bg-white border border-primary rounded-full hover:bg-primary hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
