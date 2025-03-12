// import { Phone, Mail } from 'lucide-react';
import logoPetCare from '../../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoPetCare} alt="Pet Care Logo" className="h-20" />
            </div>
            <p className="text-gray-600">Everything your pet needs</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Orders</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Blogs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-900">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-900">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-600">
                {/*<Phone className="w-4 h-4" />*/}
                <span>Open hours: 7:30am - 9pm</span>
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                {/*<Mail className="w-4 h-4" />*/}
                <span>petcare@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Full Rights Reserved © 2024 mypetcare.pet
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;