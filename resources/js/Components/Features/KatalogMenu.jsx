import React from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { Link } from "@inertiajs/react";

function KatalogMenu() {
  return (
    <div className="font-poppins container mx-auto my-10 px-10 h-[750px]">
      {/* Search Bar */}
      {/* <div className="flex justify-center mb-4">
        <input
          type="text"
          className="form-control w-1/2 rounded-full px-4 py-2 border border-gray-300"
          placeholder="Cari Menu"
        />
        <button className="btn btn-outline-secondary rounded-full ml-2 px-4 py-2">
          <FaSearch />
        </button>
      </div> */}

      {/* Healthy Food Section */}
      <section>
        <div className="flex justify-center items-center mb-3">
          <h2 className="font-bold text-2xl text-center">Healthy Food Catalog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 pt-6 px-24">
          {/* Product Card Example */}
          <div className="card h-full shadow-lg border border-gray-200 rounded-lg">
            <img
              src="https://via.placeholder.com/200"
              alt="Sop Ayam"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">Sop Ayam</h5>
              <p className="text-green-600 font-medium">Rp20.000</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-500 flex items-center">
                  <FaStar/> 4.5
                </span>
                <Link href='/detail'>
                    <button className="btn btn-success bg-green-600 text-white text-sm py-2 px-4 rounded-full hover:bg-green-700 duration-300">
                    Lihat Detail
                    </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Repeat for other products */}
          <div className="card h-full shadow-lg border border-gray-200 rounded-lg">
            <img
              src="https://via.placeholder.com/200"
              alt="Salad Buah"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">Salad Buah</h5>
              <p className="text-green-600 font-medium">Rp15.000</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-500 flex items-center">
                  <FaStar /> 4.5
                </span>
                <Link href='/detail'>
                    <button className="btn btn-success bg-green-600 text-white text-sm py-2 px-4 rounded-full hover:bg-green-700 duration-300">
                    Lihat Detail
                    </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card h-full shadow-lg border border-gray-200 rounded-lg">
            <img
              src="https://via.placeholder.com/200"
              alt="Salad Sayur"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">Salad Sayur</h5>
              <p className="text-green-600 font-medium">Rp22.000</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-yellow-500 flex items-center">
                  <FaStar /> 4.5
                </span>
                <Link href='/detail'>
                    <button className="btn btn-success bg-green-600 text-white text-sm py-2 px-4 rounded-full hover:bg-green-700 duration-300">
                    Lihat Detail
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KatalogMenu;