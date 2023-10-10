import Link from "next/link";
import Image from "next/image";
function Footer() {
    return (
        <footer className="bg-white text-gray-800 py-12 pt-20 relative">
            <Image src="/assets/images/product-3.png" width={500} alt="" height={500} className=" absolute right-36 -top-28 "/>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <div className="mb-4">
                            <Link
                                href="#"
                                className="text-4xl font-bold text-primary"
                            >
                                Furni<span className="text-gray-800">.</span>
                            </Link>
                        </div>
                        <p className="mb-4">
                            Elevate your living space with our exquisite
                            furniture collection. Donec facilisis quam ut purus
                            rutrum lobortis. Aliquam vulputate velit imperdiet
                            dolor tempor tristique.
                        </p>
                        <ul className="list-none">
                            <li className="mb-2">
                                <Link
                                    href="#"
                                    className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="#"
                                    className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                >
                                    Services
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    href="#"
                                    className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-xl font-semibold mb-4">
                            Newsletter
                        </h4>
                        <div className="mb-4 flex">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-gray-100 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                            />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-gray-100 border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                            />
                        </div>
                        <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                            Subscribe
                        </button>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                            <ul className="list-none">
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Support
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Jobs
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Nordic Chair
                                    </Link>
                                </li>
                            </ul>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Knowledge Base
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Our Team
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Kruzo Aero
                                    </Link>
                                </li>
                            </ul>
                            <ul className="list-none">
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Live Chat
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Leadership
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Ergonomic Chair
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-8 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="col-span-1">
                            <p className="mb-2 text-center md:text-left text-xl font-semibold">
                                Copyright &copy;
                                . All Rights Reserved.
                            </p>
                            <p className="text-center md:text-left text-lg">
                                Designed with{" "}
                                <span className="text-primary">❤</span> by{" "}
                                <Link
                                    href="#"
                                    className="text-primary"
                                >
                                    Mazen Elali
                                </Link>
                            </p>
                        </div>
                        <div className="col-span-1 text-center md:text-right">
                            <ul className="list-none d-inline-flex">
                                <li className="me-4">
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-800 hover:text-primary transition duration-300 ease-in-out"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
