<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> d5c40548828d3742c02137ee09bcbc125952ea3e
import { RxCross1 } from "react-icons/rx";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const PopUp = ({ message, onClose, onGoHome }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-[400px]">
<<<<<<< HEAD
                    <button className='justify-self-end'
                        onClick={onClose}>
                        <RxCross1/>
                    </button>                
                    <div className='flex justify-center'>
                        <div className="justify-items-center">
                            <h2 className="pt-2 pb-5 text-2xl font-semibold text-center">{message}</h2>
                            <IoMdCheckmarkCircleOutline size={100}/>      
                            <button 
                                className="bg-teal-600 text-white px-4 py-2 mt-5 rounded hover:bg-teal-700" 
                                onClick={onGoHome}>
                                Kembali ke Beranda
                            </button>
                        </div>
                     </div>
=======
                <button className="justify-self-end" onClick={onClose}>
                    <RxCross1 />
                </button>
                <div className="flex justify-center">
                    <div className="justify-items-center">
                        <h2 className="pt-2 pb-5 text-2xl font-semibold text-center">
                            {message}
                        </h2>
                        <IoMdCheckmarkCircleOutline size={100} />
                        <button
                            className="bg-teal-600 text-white px-4 py-2 mt-5 rounded hover:bg-teal-700"
                            onClick={onGoHome}
                        >
                            Kembali ke Beranda
                        </button>
                    </div>
                </div>
>>>>>>> d5c40548828d3742c02137ee09bcbc125952ea3e
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default PopUp;
=======
export default PopUp;
>>>>>>> d5c40548828d3742c02137ee09bcbc125952ea3e
