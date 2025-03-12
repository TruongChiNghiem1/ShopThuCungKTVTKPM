// import { Heart, ShoppingCart, User, Search } from 'lucide-react';
import logoPetCare from '../../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoPetCare} alt="Pet Care Logo" className="h-20" />
        </div>

        <div className="flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-900">Products</a>
          <a href="#" className="text-gray-700 hover:text-blue-900">Blogs</a>
          <a href="#" className="text-gray-700 hover:text-blue-900">FAQs</a>
        </div>

        <div className="flex items-center gap-4">
          {/*<Search className="w-5 h-5 text-gray-600 cursor-pointer" />*/}
          {/*<Heart className="w-5 h-5 text-gray-600 cursor-pointer" />*/}
          {/*<ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />*/}
          {/*<User className="w-5 h-5 text-gray-600 cursor-pointer" />*/}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;