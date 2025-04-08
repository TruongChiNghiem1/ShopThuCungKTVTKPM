<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return response()->json([
            'status' => 200,
            'products' => $products
        ]);
    }

    public function detail($id)
    {
        $product = Product::where('id_product', $id)->first();
        return response()->json([
            'status' => 200,
            'product' => $product
        ]);
    }
}
