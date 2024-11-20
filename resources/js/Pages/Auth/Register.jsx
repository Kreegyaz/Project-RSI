import cover from "../../../../public/assets/cover.jpg";
import googlelogo from "../../../../public/assets/googlelogo.png";

import { Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data.name);
        console.log(data.email);
        console.log(data.password);

        // post(route("register"), {
        //     onFinish: () => reset("password"),
        // });

        post(route("register"));
    };

    return (
        <div className="w-full min-h-screen flex items-start font-poppins">
            <div className="relative w-1/2 h-full flex flex-col ">
                <img src={cover} className="object-none w-dvh h-lvh flex" />
            </div>

            <div className="w-1/2 h-full flex flex-col p-20 justify-between">
                <h1 className="text-4xl font-bold px-8">BitesWise</h1>
                <p className="text-xl font-medium mt-2 px-8">
                    Create an Account
                </p>
                <form
                    className="w-full flex flex-col px-8 mt-5"
                    onSubmit={submit}
                >
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={data.name}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <div className="w-full flex flex-col ">
                        <button
                            type="submit"
                            className="w-full bg-emerald-500 py-4 my-1 text-white rounded-md text-center font-medium flex items-center justify-center hover:bg-emerald-700"
                            disabled={processing}
                        >
                            Create Account
                        </button>
                    </div>
                </form>

                <div className="w-full flex items-center justify-center relative p-8">
                    <div className="w-full h-[1.5px] bg-black"></div>
                    <p className="text-base absolute text-black-80 bg-white px-2 font-medium">
                        or
                    </p>
                </div>

                <div className="w-full flex felx-col px-8">
                    <button
                        type="submit"
                        className="w-full bg-white py-4 my-2 text-black font-medium border border-blue-600 rounded-md text-center flex items-center justify-center hover:bg-blue-600 hover:text-white"
                    >
                        <img src={googlelogo} className="h-8 mr-1" />
                        Sign Up with Google
                    </button>
                </div>

                <p className="text-center text-sm">
                    Already have an account?
                    <span className="ml-1 text-blue-600 cursor-pointer hover:font-medium">
                        <Link href="/login">Sign In</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}
