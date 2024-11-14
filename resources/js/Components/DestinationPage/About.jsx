import React from "react";
import { Link } from "@inertiajs/react";
import homeicon from '../../../../public/assets/homeicon.png'

const Deskripsi = () => {
    return(
        <div id="tentang" className="flex flex-col text-center font-poppins w-full bg-teal-50 p-16">
            
            <div className="flex justify-center">
                <div className="justify-items-center">
                    <h1 className="font-bold text-3xl ">Selamat datang <span className="text-teal-700">pejuang sehat!</span></h1>
                    <img src={homeicon} className="h-[400px]"/>
                    <p className="pt-2 ">Tidak ada kata terlambat untuk memulai hidup sehat, <br></br>karena setiap langkah kecil yang kita ambil hari ini
                    <br></br>adalah investasi besar bagi kesehatan di masa depan.</p>
                </div>
            </div>

            <div className="pt-10">
                <Link href='/login' className="duration-200 bg-teal-100 cursor-pointer rounded-full hover:bg-teal-500 hover:text-white py-3 px-8 font-bold">
                    Login
                </Link>
                <Link href='/register' className="duration-200 bg-teal-100 cursor-pointer rounded-full hover:bg-teal-500 hover:text-white py-3 px-8 font-bold ml-4">
                    Register
                </Link> 
            </div>
            
        </div>
    )
}

export default Deskripsi;