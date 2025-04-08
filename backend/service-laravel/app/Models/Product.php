<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'product';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'price',
        'rating',
        'image',
        'tag'
    ];

    public function image() {
        return $this->hasMany(Image::class, 'id_product', 'id_product');
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'price' => 'float',
        'rating' => 'float'
    ];

    /**
     * The attributes that should be appended.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'formatted_price'
    ];

    /**
     * Get the formatted price attribute.
     *
     * @return string
     */

    public function getFormattedPriceAttribute()
    {
        return '$' . number_format($this->price, 2);
    }

    /**
     * Get the product list.
     *
     * @return array
     */

    public static function getProductList()
    {
        return [
            [
                'id' => 1,
                'name' => 'SmartHeart Adult Food',
                'price' => '5.25',
                'rating' => 4.5,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag' => 'Best Seller'
            ],
            [
                'id' => 2,
                'name' => 'Premium Cat Food',
                'price' => '4.99',
                'rating' => 4.8,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag' => 'New'
            ],
            [
                'id' => 3,
                'name' => 'Bird Feed Mix',
                'price' => '3.99',
                'rating' => 4.2,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag' => 'Popular'
            ],
            [
                'id' => 4,
                'name' => 'Deluxe Pet Bowl',
                'price' => '12.99',
                'rating' => 4.7,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag' => 'Featured'
            ],
            [
                'id' => 5,
                'name' => 'Pet Grooming Kit',
                'price' => '24.99',
                'rating' => 4.6,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag'
            ],
            [
                'id' => 6,
                'name' => 'SmartHeart Adult Food',
                'price' => '5.25',
                'rating' => 4.5,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag' => 'Best Seller'
            ],
            [
                'id' => 7,
                'name' => 'Premium Cat Food',
                'price' => '4.99',
                'rating' => 4.8,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag' => 'New'
            ],
            [
                'id' => 8,
                'name' => 'Bird Feed Mix',
                'price' => '3.99',
                'rating' => 4.2,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag' => 'Popular'
            ],
            [
                'id' => 9,
                'name' => 'Deluxe Pet Bowl',
                'price' => '12.99',
                'rating' => 4.7,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag' => 'Featured'
            ],
            [
                'id' => 10,
                'name' => 'Pet Grooming Kit',
                'price' => '24.99',
                'rating' => 4.6,
                'image' => 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                'tag' => 'Sale'
            ]
        ];
    }
}
