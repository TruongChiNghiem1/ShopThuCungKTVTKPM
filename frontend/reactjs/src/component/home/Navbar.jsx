// import { Heart, ShoppingCart, User, Search } from 'lucide-react';
import logoPetCare from '../../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="pt-3 mt-3 absolute w-100">
      <div className="mx-auto flex items-center justify-between w-75">
        <div className="flex items-center gap-2">
          <img src={logoPetCare} alt="Pet Care Logo" className="h-10" />
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