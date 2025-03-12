
const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#E8F9FD] to-[#d5f3fc] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Happy Dog" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Cat" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/*<PawPrint className="w-6 h-6 text-yellow-400" />*/}
              <span className="text-blue-900 text-lg font-medium">Your Pet's Happiness, Our Priority</span>
            </div>
          </div>
          
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-blue-900 mb-6 leading-tight">
              For the <span className="text-yellow-400">Best</span> in Pet Food 
              <br />and Service, <span className="text-yellow-400">Quality</span> 
              <br />is Our Promise
            </h1>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors shadow-lg flex items-center gap-2">
              Shop Now
            </button>
          </div>

          <div className="absolute right-0 top-0 -mt-4">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=60" 
                alt="Pet Food" 
                className="w-40 h-40 object-cover rounded-2xl transform rotate-12 border-4 border-white shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg">
                New!
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}

export default Hero;