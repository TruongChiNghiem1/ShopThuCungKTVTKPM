// import { PawPrint } from 'lucide-react';

const categories = [
  { 
    name: 'Dogs', 
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: '150+ Products'
  },
  { 
    name: 'Cats', 
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: '120+ Products'
  },
  { 
    name: 'Birds', 
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: '80+ Products'
  },
  { 
    name: 'Collars', 
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: '50+ Products'
  },
  { 
    name: 'Fun Toys', 
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: '100+ Products'
  },
  { 
    name: 'Others', 
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: '200+ Products'
  },
];

const Categories = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          {/*<PawPrint className="w-8 h-8 text-yellow-400" />*/}
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Shop by Category
          </h2>
          {/*<PawPrint className="w-8 h-8 text-yellow-400" />*/}
        </div>
        
        <div className="grid grid-cols-6 gap-8">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-blue-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;