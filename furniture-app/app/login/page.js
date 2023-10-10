"use client";
import Botton from "@/components/botton/Botton";
import InputText from "@/components/textField/InputText";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { push } = useRouter();
    const [loder, setLoder] = useState(false);
    const [message, setMessage] = useState("");

    const login = async (e) => {
        setLoder(true);
        e.preventDefault();
        axios
            .post(`${process.env.NEXT_PUBLIC_BLABLA_URL}/login`, {
                email: email,
                password: password,
            })
            .then((res) => {
                if (res.status != 200) {
                    console.log(res.data);
                    setMessage("Email or Password Wrong !!");
                } else {
                    setMessage(res.data.message);
                    localStorage.setItem("auth", JSON.stringify(res.data));
                    setTimeout(() => {
                        push("/");
                    }, 2000);
                    setLoder(false);
                }
            })
            .catch((err) => {
                setMessage(err.response.data);
                setLoder(false);
            });
    };

    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className=" flex rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className=" p-14 flex flex-col justify-around items-center ">
                    <p className=" text-gray-800 text-5xl font-medium">
                        {" "}
                        LOGIN{" "}
                    </p>
                    <span className=" text-primary font-medium ">
                        {message}
                    </span>
                    <form className="flex flex-col gap-10 " onSubmit={login}>
                        <InputText
                            type="text"
                            name="email"
                            required={true}
                            placeholder="Enter Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className=" relative">
                            <InputText
                                type={
                                    showPassword == false ? `password` : "text"
                                }
                                required={true}
                                name="password"
                                placeholder="Enter Your Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p
                                className=" absolute top-4 right-4 cursor-pointer uppercase text-primary  font-medium "
                                onClick={() => {
                                    setShowPassword(!showPassword);
                                }}
                            >
                                {showPassword == false ? "show" : "hide"}{" "}
                            </p>
                        </div>
                        <Botton
                            text={loder ? `LODING ...` : `SIGN IN`}
                            type="submit"
                        />
                    </form>
                </div>
                <div className="">
                    <Image
                        src="https://i.pinimg.com/564x/f1/93/f7/f193f768f4251763e112556316e22e21.jpg"
                        alt=" "
                        width={400}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
