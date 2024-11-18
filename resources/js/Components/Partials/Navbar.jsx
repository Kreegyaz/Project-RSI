import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <div className="flex-no-wrap sticky top-0 relative w-full flex items-center justify-between p-7 font-poppins shadow-md sticky top-0 bg-white">
            <div>
                <p className="font-bold text-3xl">BitesWise</p>
            </div>
            <div className="font-medium">
                <Link
                    href="/beranda"
                    className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold"
                >
                    Beranda
                </Link>
                <Link
                    href="/kalkulator"
                    className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold"
                >
                    Kalkulator BMI
                </Link>
                <Link
                    href="/katalog"
                    className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold"
                >
                    Katalog
                </Link>
                <Link
                    href="/keranjang"
                    className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold"
                >
                    Keranjang
                </Link>
                <Link
                    href="/profil"
                    className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold"
                >
                    Profil
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
