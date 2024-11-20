<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nama_produk',
        'harga',
        'stok_produk',
        'berat',
        'kalori',
        'created_at',
        'updated_at'
    ];
}
