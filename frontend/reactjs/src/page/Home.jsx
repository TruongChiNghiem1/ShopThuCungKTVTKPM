import React from 'react';
import { Heart, ShoppingCart, User, Search, PawPrint as Paw, Package } from 'lucide-react';
import Navbar from '../component/home/Navbar.jsx';
import Hero from '../component/home/Hero.jsx';
import Categories from '../component/home/Categories.jsx';
import TopProducts from '../component/home/TopProducts.jsx';
import PurchaseProducts from '../component/home/PurchaseProducts.tsx';
import BlogSection from '../component/home/BlogSection.jsx';
import Footer from '../component/home/Footer.jsx';

function Home() {
  return (
    <div className="min-h-screen bg-[#E8F9FD]">
      <Navbar />
      <Hero />
      <Categories />
      <TopProducts />
      <PurchaseProducts />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Home;