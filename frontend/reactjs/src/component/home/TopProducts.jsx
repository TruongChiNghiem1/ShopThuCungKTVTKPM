// import { Heart, Star, ShoppingCart } from 'lucide-react';
import star from '../../assets/star.png';
import shoppingCart from "../../assets/shopping-cart.png";
import heart from "../../assets/heart.png";
const products = [
  {
    id: 1,
    name: 'SmartHeart Adult Food',
    price: '5.25',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Premium Cat Food',
    price: '4.99',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tag: 'New'
  },
  {
    id: 3,
    name: 'Bird Feed Mix',
    price: '3.99',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tag: 'Popular'
  },
  {
    id: 4,
    name: 'Deluxe Pet Bowl',
    price: '12.99',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tag: 'Featured'
  },
  {
    id: 5,
    name: 'Pet Grooming Kit',
    price: '24.99',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    tag: 'Sale'
  }
];

const TopProducts = () => {
  return (
    <section className="bg-gradient-to-b blue-bg-color py-16 px-6 mx-5 border-radius-20 border-none">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Top-selling Products
        </h2>
        
        <div className="grid grid-cols-5 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all relative group"
            >
              <div className="absolute top-4 right-4 z-10">
                <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all">
                  {/*<Heart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />*/}
                  <img src={heart} alt="Pet Care Logo" className="w-5 h-5 m-1 text-gray-400 hover:text-red-500 transition-colors"/>
                </button>
              </div>

              {product.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-yellow-400 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>
              )}
              
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-900 line-clamp-2">{product.name}</h3>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map(() => (
                      <img src={star} alt="Pet Care Logo" className="h-3"/>
                  ))}
                  <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-blue-900">${product.price}</p>
                  <button className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
                    <img src={shoppingCart} alt="Pet Care Logo" className="w-5 h-5 m-1"/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopProducts;