import Navbar from "../component/home/Navbar.jsx";
import ProductList from "../component/Product/ProductList.jsx";
import Search from "../component/Product/Search.jsx";
import BlogSection from "../component/home/BlogSection.jsx";
import Footer from "../component/home/Footer.jsx";
import ProductFilter from "../component/Product/ProductFilter.jsx";

function Product() {
    return (
        <div>
            <Navbar />
            <Search/>

            <ProductList />
            <BlogSection />
            <Footer />
        </div>
    )
}

export default Product