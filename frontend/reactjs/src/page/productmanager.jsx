import React from "react";
import '/src/Styles/product.css'; // Import file CSS
import logo from '/src/assets/logo.png';
import logomeo from '/src/assets/logomeo.png';
import search from '/src/assets/search.png';

function App() {
    return (
        <div>
            <div className="navbar-product">
                <a href="#"><img src={logo} alt="Logo" style={{ width: "200px", height: "80px" }} /></a>
                <a href="#" className="navgeneral">General</a>
                <a href="#" className="navstore">Management Store</a>
                <div className="logo-container-product">
                    <a href="#"><img src={logomeo} alt="Logo" style={{ width: "70px", height: "70px", float: "right" }} /></a>
                </div>
            </div>

            <div className="breadcrumb-product">
                <a href="#">Management</a> &gt; <span style={{ color: "#007bff" }}>Products</span>
            </div>

            <div className="categories-product">Products</div>

            <div className="containe-product">
                <div className="search-bar-product">
                    <div style={{ display: "flex", border: "1px solid", borderRadius: "10px" }}>
                        <input type="text" id="searchInput-product" placeholder="Search for products..." />
                        <button className="search" onClick={() => searchCategory()}><img src={search} alt="Search" /></button>
                    </div>
                    <div>
                        <button className="add-product-button-product">Add category</button>
                        <button className="delete-product-button-product">Delete</button>
                    </div>
                </div>

                <table className="table-product">
                    <thead>
                    <tr>
                        <th>
                            <input type="checkbox"/>
                        </th>
                        <th>image</th>
                        <th>product code</th>
                        <th>product name</th>
                        <th>Category name</th>
                        <th>Ratings</th>
                        <th>Quantity of products</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>1</td>
                        <td>Dogs</td>
                        <td>10</td>
                        <td>1</td>
                        <td>Dogs</td>
                        <td>10</td>
                        <td>1</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

// Tìm kiếm danh mục
function searchCategory() {

}

export default App;
