import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

// function CartItem({ name, image, price, initialQuantity, onTotalChange }) {
//   const [quantity, setQuantity] = useState(initialQuantity);
//   const [isChecked, setIsChecked] = useState(true);

//   const totalPriceItem = price * quantity;

//   const handleIncrease = () => {
//     const newQuantity = quantity + 1;
//     setQuantity(newQuantity);
//     onTotalChange(price); // Tambah harga total
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       const newQuantity = quantity - 1;
//       setQuantity(newQuantity);
//       onTotalChange(-price); // Kurangi harga total
//     }
//   };

//   // Fungsi untuk mengubah status checkbox
//   const handleCheckboxChange = (event) => {
//     const isNowChecked = event.target.checked; // Mendapatkan status terbaru checkbox
//     if (isNowChecked) {
//       onTotalChange(totalPriceItem); // Tambahkan harga item jika checkbox dicentang
//     } else {
//       onTotalChange(-totalPriceItem); // Kurangi harga item jika checkbox tidak dicentang
//     }

//     setIsChecked(isNowChecked); // Update state isChecked
//   };

//   return (
//     <tr className="border-b">
//       <td className="p-3">
//         <input
//           type="checkbox"
//           className="form-check-input"
//   checked={isChecked}
//   onChange={handleCheckboxChange}
//         />
//       </td>
//       <td className="p-3">
//         <div className="flex items-center">
//           <img src={image} alt="Product" className="w-20 h-20 object-cover mr-3 rounded" />
//           <div>
//             <h6 className="font-semibold">{name}</h6>
//             <small className="text-gray-500">100 gr | 200 cal</small>
//           </div>
//         </div>
//       </td>
//       <td className="p-3 text-center">Rp {price.toLocaleString("id-ID")}</td>
//       <td className="p-3 text-center">
//         <div className="flex items-center justify-center">
//           <button
//             onClick={handleDecrease}
//             className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
//           >
//             <FaMinus className="w-4 h-4 text-gray-600" />
//           </button>
//           <span className="mx-3">{quantity}</span>
//           <button
//             onClick={handleIncrease}
//             className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
//           >
//             <FaPlus className="w-4 h-4 text-gray-600" />
//           </button>
//         </div>
//       </td>
//       <td className="p-3 text-center text-green-600 font-medium">
//         Rp {totalPriceItem.toLocaleString("id-ID")}
//       </td>
//       <td className="p-3 text-center">
//         <button className="text-red-600">
//           <FaTrash className="w-5 h-5" />
//         </button>
//       </td>
//     </tr>
//   );
// }

// export default CartItem;
// function CartItem({ id, name, image, price, initialQuantity, onTotalChange }) {
//     const {product} = usePage.props;

//     const [quantity, setQuantity] = useState(initialQuantity);

//     const handleQuantityChange = (change) => {
//         const newQuantity = quantity + change;
//         if (newQuantity < 1) return;

//         const changeInPrice = change * price;
//         onTotalChange(changeInPrice);

//         setQuantity(newQuantity);

//         // Kirim request ke server untuk memperbarui quantity
//         fetch(`/cart/${id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//                 "X-CSRF-TOKEN": document.querySelector(
//                     'meta[name="csrf-token"]'
//                 ).content,
//             },
//             body: JSON.stringify({ quantity: newQuantity }),
//         });
//     };

//     return (
//         <tr className="border-b">
//             <td className="p-3 text-center">
//                 <input type="checkbox" checked className="form-checkbox" />
//             </td>
//             <td className="p-3 flex items-center space-x-4">
//                 <img src={image} alt={name} className="w-16 h-16 rounded" />
//                 <span>{name}</span>
//             </td>
//             <td className="p-3 text-center">
//                 Rp{price.toLocaleString("id-ID")}
//             </td>
//             <td className="p-3 text-center">
//                 <button
//                     onClick={() => handleQuantityChange(-1)}
//                     className="px-3 py-1 border rounded"
//                 >
//                     -
//                 </button>
//                 <span className="px-3">{quantity}</span>
//                 <button
//                     onClick={() => handleQuantityChange(1)}
//                     className="px-3 py-1 border rounded"
//                 >
//                     +
//                 </button>
//             </td>
//             <td className="p-3 text-center">
//                 Rp{(price * quantity).toLocaleString("id-ID")}
//             </td>
//             <td className="p-3 text-center">
//                 <Link
//                     href={`/cart/${id}`}
//                     method="delete"
//                     as="button"
//                     className="text-red-500"
//                 >
//                     Hapus
//                 </Link>
//             </td>
//         </tr>
//     );
// }

// export default CartItem;
export default function CartItem({
    name,
    image,
    price,
    initialQuantity,
    onRemove,
    onTotalChange,
}) {
    const [quantity, setQuantity] = useState(initialQuantity);
    const [isChecked, setIsChecked] = useState(true);

    const totalPriceItem = price * quantity;

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onTotalChange(+price); // Tambah harga total
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onTotalChange(-price); // Kurangi harga total
        }
    };

    const handleCheckboxChange = (event) => {
        const isNowChecked = event.target.checked; // Mendapatkan status terbaru checkbox
        if (isNowChecked) {
            onTotalChange(totalPriceItem); // Tambahkan harga item jika checkbox dicentang
        } else {
            onTotalChange(-totalPriceItem); // Kurangi harga item jika checkbox tidak dicentang
        }

        setIsChecked(isNowChecked); // Update state isChecked
    };

    return (
        <tr className="border-b">
            <td className="p-3">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            </td>
            <td className="p-3">
                <div className="flex items-center">
                    <img
                        src={image}
                        alt={name}
                        className="w-20 h-20 object-cover mr-3 rounded"
                    />
                    <div>
                        <h6 className="font-semibold">{name}</h6>
                    </div>
                </div>
            </td>
            <td className="p-3 text-center">Rp {price.toLocaleString()}</td>
            <td className="p-3 text-center">
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleDecrease}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
                    >
                        <FaMinus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="mx-3">{quantity}</span>
                    <button
                        onClick={handleIncrease}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded"
                    >
                        <FaPlus className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
            </td>
            <td className="p-3 text-center text-green-600 font-medium">
                Rp {totalPriceItem.toLocaleString()}
            </td>
            <td className="p-3 text-center">
                <button onClick={onRemove} className="text-red-600">
                    <FaTrash className="w-5 h-5" />
                </button>
            </td>
        </tr>
    );
}
