<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage');
});

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');

Route::get('/kalkulator', function () {
    return Inertia::render('Kalkulator');
})->name('kalkulator');

Route::get('/keranjang', function () {
    return Inertia::render('Keranjang');
})->name('keranjang');

Route::get('/katalog', function () {
    return Inertia::render('Katalog');
})->name('katalog');

Route::get('/profil', function () {
    return Inertia::render('Profil');
})->name('profil');

Route::get('/beranda', function () {
    return Inertia::render('Beranda');
})->name('beranda');

Route::get('/detail', function () {
    return Inertia::render('Detail');
})->name('detail');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::resource('produk', ProductController::class);
    Route::post('/keranjang',[CartController::class, 'tambahKeranjang'])->name('cart.tambahKeranjang');
    Route::get('/keranjang',[CartController::class, 'index'])->name('cart.index');
    
// Route::get('/beranda', function () {
//     return Inertia::render('beranda');
// })->middleware(['auth', 'verified'])->name('beranda');

require __DIR__.'/auth.php';
