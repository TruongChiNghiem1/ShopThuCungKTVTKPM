import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
               src="/icon.png"
              alt="Pet Care Logo"
              className="h-12 w-12 rounded-full"
            />
            <h1 className="text-2xl font-semibold text-white ml-3">Pet Care</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-yellow-300 transition">Home</Link>
            <Link to="/products" className="text-white hover:text-yellow-300 transition">Products</Link>
            <Link to="/blogs" className="text-white hover:text-yellow-300 transition">Blogs</Link>
            <Link to="/faqs" className="text-white hover:text-yellow-300 transition">FAQs</Link>
            <div className="relative">
              <i className="fas fa-shopping-cart text-white text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">2</span>
            </div>
            <i className="fas fa-user-circle text-white text-xl"></i>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-center text-3xl font-bold text-blue-800 my-6">Payment</h2>
        <div className="flex justify-center items-center space-x-3 text-gray-600 text-sm uppercase tracking-wide">
          <span>Cart</span>
          <span className="text-blue-600">→</span>
          <span className="font-semibold">Bill</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Left: Product List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Product List</h3>
            <div className="space-y-6">
              {[
                {
                  id: 1,
                  name: "Whiskas Kitten Food, Ocean Fish and Milk Flavor, Pouch",
                  price: 112000,
                  image: "https://storage.googleapis.com/a1aa/image/5jyR1nyf9LOZimMev-rwkVm6cbqrJLgVOSOFLhpWdJQ.jpg",
                },
                {
                  id: 2,
                  name: "Spirit Goat Milk Calcium Tablets for Dogs - Coat & Health",
                  price: 75000,
                  image: "https://storage.googleapis.com/a1aa/image/NgE4jqZpSwNrfmpIEOLzdRMKasBR6vwT0ms9QzFYk7Q.jpg",
                },
                {
                  id: 3,
                  name: "Wanpy Cat Creamy Treats with Screw Cap 90g",
                  price: 127000,
                  image: "https://storage.googleapis.com/a1aa/image/6rBt-7tE7IvT0CVINs6yht_nlgHLxRT2FoYRJyh2Wy0.jpg",
                },
                {
                  id: 4,
                  name: "Smartheart Dog Pate 400g",
                  price: 37900,
                  image: "https://storage.googleapis.com/a1aa/image/kvKCM7_C2o7gzHwh01yE_6hvvmGJnkyMBl-dAThMCz4.jpg",
                },
              ].map((item, idx) => (
                <div className="flex items-center space-x-4" key={item.id}>
                  <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-medium">
                    {idx + 1}
                  </div>
                  <img src={item.image} alt={item.name} className="h-14 w-14 rounded-md object-cover" />
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    <p className="text-gray-500 text-sm">Quantity: 1</p>
                  </div>
                  <p className="text-blue-600 font-semibold">{item.price.toLocaleString()} VND</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Customer Info & Payment */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Customer Information</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="full-name">Full Name (*)</label>
                <input
                  type="text"
                  id="full-name"
                  placeholder="Your name"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="phone-number">Phone Number (*)</label>
                  <input
                    type="text"
                    id="phone-number"
                    placeholder="Phone number"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    id="gender"
                    placeholder="Gender"
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="address">Address (*)</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Your address"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </form>

            <div className="mt-6 border-t pt-4">
              <p className="text-gray-700">Total Products: <span className="font-semibold">4 items</span></p>
              <p className="text-gray-700">Payment Method: <span className="font-semibold">Cash on Delivery (COD)</span></p>
              <p className="text-red-600 font-bold text-lg mt-2">Total: 351,900 VND</p>
            </div>

            <div className="flex space-x-4 mt-6">
              <Link
                to="/"
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-300 transition text-center"
              >
                Cancel
              </Link>
              <Link
                to="/qr-payment?amount=351900"
                className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition text-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;