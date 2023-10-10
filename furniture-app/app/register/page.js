"use client";
import Botton from "@/components/botton/Botton";
import InputText from "@/components/textField/InputText";
import Select from "@/components/textField/Select";
import Image from "next/image";
import { useEffect, useState } from "react";
import { requests } from "@/util/ApiRequests";
import { useRouter } from "next/navigation";

function Register() {
    const [data, setData] = useState("");
    const [message, setmessage] = useState("");

    const {push}= useRouter() 
    const handelChange = (e) => {
        const { name, value } = e.target;
        setData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const OnSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await requests.addUser(data);
            setmessage(res.data.message)
            if(res.status == 200){
                setTimeout(() => {
                    push('/login')
                }, 2000);
            }else{
                setmessage("Erorr registration Email or Number Phone used befor ..")
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <div className=" flex flex-row-reverse rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className=" p-14 flex flex-col justify-around items-center ">
                    <p className=" text-gray-800 text-5xl font-medium">
                        {" "}
                        SIGN UP{" "}
                    </p>
                    <span className=" text-primary font-medium ">
                        {message}
                    </span>
                    <form
                        className="grid grid-cols-2 gap-5 "
                        onSubmit={OnSubmit}
                    >
                        <InputText
                            type="text"
                            required={true}
                            onChange={handelChange}
                            name="firstName"
                            placeholder="First Name"
                        />
                        <InputText
                            type="text"
                            required={true}
                            onChange={handelChange}
                            name="lastName"
                            placeholder="Last Name"
                        />
                        <InputText
                            type="text"
                            required={true}
                            onChange={handelChange}
                            name="email"
                            placeholder="Email"
                        />
                        <InputText
                            type="number"
                            required={true}
                            onChange={handelChange}
                            name="phoneNumber"
                            placeholder="Phone Number With Country Code"
                        />
                        <InputText
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={handelChange}
                        />
                        <InputText
                            type="password"
                            required={true}
                            placeholder="Password Confirmation"
                            onChange={(e) => {
                                e.target.value != data.password
                                    ? setmessage(" wrong ")
                                    : setmessage("");
                            }}
                        />
                        <Select
                            name="gender"
                            required={true}
                            onChange={handelChange}
                        />
                        <Botton text={"Sign Up"} type="submit" />
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

export default Register;
