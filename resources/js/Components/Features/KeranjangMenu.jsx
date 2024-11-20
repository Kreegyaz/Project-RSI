import React, { useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import CartItem from "./CartItem";
import { Link, usePage } from "@inertiajs/react";

function ShoppingCart() {
    // const [totalPrice, setTotalPrice] = useState(20000);

    // // Fungsi untuk mengubah total harga ketika kuantitas berubah
    // const handleTotalChange = (change) => {
    //     setTotalPrice((prevTotal) => prevTotal + change);
    // };

    // const { cart } = usePage().props; // Data keranjang dari Laravel
    // const [totalPrice, setTotalPrice] = useState();
    // cart.reduce((total, item) => total + item.product.harga * item.quantity, 0);

    const { cart } = usePage().props; // Data keranjang dari Laravel
    const [totalPrice, setTotalPrice] = useState(
        cart.reduce(
            (total, item) => total + item.product.harga * item.quantity,
            0
        )
    );

    const handleTotalChange = (change) => {
        setTotalPrice((prevTotal) => prevTotal + change);
    };

    return (
        //     <section className="px-20 font-poppins container mx-auto my-10 h-[750px]">
        //         <div className="flex justify-between items-center mb-5">
        //             <div className="flex items-center space-x-3">
        //                 <Link href="/detail">
        //                     <button className="p-2 bg-gray-100 rounded-full">
        //                         <FaArrowLeft className="w-5 h-5 text-gray-600" />
        //                     </button>
        //                 </Link>
        //                 <h4 className="text-xl font-bold">Keranjang</h4>
        //             </div>
        //             {/* <div className="flex items-center">
        //       <input
        //         type="text"
        //         className="w-72 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
        //         placeholder="Cari Pesanan"
        //       />
        //       <button className="p-2 bg-gray-100 rounded-r-full">
        //         <FaSearch className="w-5 h-5 text-gray-600" />
        //       </button>
        //     </div> */}
        //         </div>

        //         <div className="bg-white p-5 rounded-lg shadow mb-5">
        //             <table className="w-full">
        //                 <thead>
        //                     <tr className="border-b">
        //                         <th className="p-3 text-center w-5"></th>
        //                         <th className="p-3 text-left">Produk</th>
        //                         <th className="p-3 text-center">Harga Satuan</th>
        //                         <th className="p-3 text-center">Kuantitas</th>
        //                         <th className="p-3 text-center">Total Harga</th>
        //                         <th className="p-3 text-center"></th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     <CartItem
        //                         name="Sop Ayam"
        //                         image="https://via.placeholder.com/100"
        //                         price={20000}
        //                         initialQuantity={1}
        //                         onTotalChange={handleTotalChange}
        //                     />

        //                     {/* Tambahkan CartItem lainnya jika diperlukan */}
        //                 </tbody>
        //             </table>
        //         </div>

        //         <div className="bg-white p-5 rounded-lg shadow">
        //             <div className="flex justify-end items-center space-x-4">
        //                 <span className="text-lg font-medium">Total:</span>
        //                 <span className="text-green-600 font-semibold text-xl">
        //                     Rp{totalPrice.toLocaleString("id-ID")}
        //                 </span>
        //                 <button className="duration-300 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700">
        //                     Buat Pesanan
        //                 </button>
        //             </div>
        //         </div>
        //     </section>
        // );

        <div className="container mx-auto my-10">
            <h1 className="text-2xl font-bold mb-5">Keranjang Belanja</h1>
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr className="border-b">
                        <th className="p-4"></th>
                        <th className="p-4 text-left">Produk</th>
                        <th className="p-4 text-center">Harga Satuan</th>
                        <th className="p-4 text-center">Kuantitas</th>
                        <th className="p-4 text-center">Total Harga</th>
                        <th className="p-4 text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cart) => (
                        <CartItem
                            key={cart.id}
                            id={cart.id}
                            name={cart.product.nama_produk}
                            image="https://via.placeholder.com/100" // Tambahkan URL produk asli
                            price={cart.product.harga}
                            initialQuantity={cart.quantity}
                            onTotalChange={handleTotalChange}
                        />
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-5">
                <span className="text-lg font-medium">
                    Total: Rp {totalPrice.toLocaleString("id-ID")}
                </span>
                <button className="px-6 py-2 bg-green-600 text-white rounded">
                    Buat Pesanan
                </button>
            </div>
        </div>
    );
}

export default ShoppingCart;
