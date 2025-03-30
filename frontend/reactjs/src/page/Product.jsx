import Navbar from "../component/home/Navbar.jsx";
import ProductList from "../component/Product/ProductList.jsx";
import Search from "../component/Product/Search.jsx";

function Product() {
    return (
        <div>
            <Navbar />
            <Search/>
            <ProductList />
        </div>
    )
}

export default Product