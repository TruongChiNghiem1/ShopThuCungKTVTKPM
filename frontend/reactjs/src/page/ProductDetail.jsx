import Navbar from "../component/home/Navbar.jsx";
import ProductList from "../component/Product/ProductList.jsx";
import Search from "../component/Product/Search.jsx";
import BlogSection from "../component/home/BlogSection.jsx";
import Footer from "../component/home/Footer.jsx";
import ProductShowDetail from "../component/Product/ProductShowDetail.jsx";

function ProductDetail() {
    return (
        <div>
            <Navbar />
            <ProductShowDetail />
            <BlogSection />
            <Footer />
        </div>
    )
}

export default ProductDetail