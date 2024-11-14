import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return(
        <div className="flex-no-wrap relative w-full flex items-center justify-between p-7 font-poppins shadow-md">
            <div>
                <p className="font-bold text-3xl">BitesWise</p>
            </div>
            <div className="font-medium">
                <Link 
                    to="tentang" 
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold">Tentang Kami</Link>
                <Link 
                    to="fitur"
                    spy={true}
                    smooth={true}
                    duration={500} 
                    className="duration-200 cursor-pointer text-teal-700 hover:text-teal-500 py-3 px-8 font-bold">Fitur</Link> 
            </div>
        </div>
    )
}

export default Navbar;