// @ts-ignore
import star from '../../assets/star.png';
import catBlue from '../../assets/Home/CatBlue.png';
const products = [
  {
    id: 1,
    name: 'Whiskas Kitten Food',
    rating: 4.5,
    reviews: 45,
    price: '12.99',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  // Add more products
];

const PurchaseProducts = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <img src={catBlue} className="mb-3" alt={'CatCategory'}/>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
            Purchase Pet Products
          </h2>
        </div>

          <div className="grid grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg p-4 shadow-md">
                  <div className="w-full aspect-square rounded-lg overflow-hidden mb-3">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map(() => (
                          <img src={star} alt="Pet Care Logo" className="h-3"/>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  <p className="text-yellow-500 font-bold">${product.price}</p>
                </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              View all
            </button>
          </div>
        </div>
    </section>
);
}

export default PurchaseProducts;