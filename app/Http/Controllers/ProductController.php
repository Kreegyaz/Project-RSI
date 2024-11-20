<?php

namespace App\Http\Controllers;
<<<<<<< HEAD
use App\Models\Product; // Import the Product model
use Illuminate\Http\Request;

=======

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
>>>>>>> d5c40548828d3742c02137ee09bcbc125952ea3e

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
<<<<<<< HEAD

    public function index()
    {
        $products = Product::all(); // Fetch all products from the database
        return view('katalog', compact('produk')); // Pass the products to the view
        
    }
    
=======
    public function index()
    {
        $products = Product::all(); // Fetch all products from the database
        return Inertia::render('Katalog', [
            'products' => $products,
        ]);
    }
>>>>>>> d5c40548828d3742c02137ee09bcbc125952ea3e

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
<<<<<<< HEAD

    public function show(string $id)
    {
        // Fetch the product by its ID, or throw a 404 error if not found
        $product = Product::findOrFail($id);
    
        // Pass the product to the view
        return view('keranjang', compact('produk'));
    }
    
=======
    public function show(string $id)
    {
        // // Fetch the product by its ID, or throw a 404 error if not found
        // $product = Product::findOrFail($id);
    
        // // Pass the product to the view
        // return view('catalog.detail_product', compact('product'));  

        $product = Product::findOrFail($id); // Cari produk berdasarkan ID

    return Inertia::render('Detail', [
        'product' => $product, // Kirim data produk spesifik ke React
    ]);
    }
>>>>>>> d5c40548828d3742c02137ee09bcbc125952ea3e

    /**
     * Show the form for editing the specified resource.
     */
<<<<<<< HEAD
    public function edit(string $id)
=======
    public function edit(Product $product)
>>>>>>> d5c40548828d3742c02137ee09bcbc125952ea3e
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
<<<<<<< HEAD
    public function update(Request $request, string $id)
=======
    public function update(Request $request, Product $product)
>>>>>>> d5c40548828d3742c02137ee09bcbc125952ea3e
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
<<<<<<< HEAD
    public function destroy(string $id)
    {
        //
    }


=======
    public function destroy(Product $product)
    {
        //
    }
>>>>>>> d5c40548828d3742c02137ee09bcbc125952ea3e
}
