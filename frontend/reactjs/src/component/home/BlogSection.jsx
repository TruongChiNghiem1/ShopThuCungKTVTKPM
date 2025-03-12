
const blogs = [
  {
    id: 1,
    title: 'Interesting Facts To Know Before Caring Pet',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    excerpt: 'Before welcoming a furry friend into your home, find out what you should know.'
  },
  {
    id: 2,
    title: 'Best Medicine For Your Pamper Pet\'s Ticks',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    excerpt: 'Protect your pet from harmful parasites with these effective treatments.'
  },
  {
    id: 3,
    title: 'Best Top 10 Ways To Make Your Pets Happy',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    excerpt: 'Simple ways to ensure your pets live their happiest, healthiest lives.'
  }
];

const BlogSection = () => {
  return (
    <section className="bg-[#E8F9FD] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Charming Pet News & Blog Updates
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <button className="text-blue-900 font-medium hover:text-blue-700">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;