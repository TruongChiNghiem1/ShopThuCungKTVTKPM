import React, { useState, useEffect } from "react";
import '/src/Styles/categories.css'; // Import file CSS
import logo from '/src/assets/logo.png';
import logomeo from '/src/assets/logomeo.png';
import search from '/src/assets/search.png';

function App() {
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '' });

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                console.log('Fetching categories...');
                const response = await fetch('http://localhost:3001/api/categories');
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                console.log('Received categories data:', data);
                if (isMounted) {
                    setCategories(data);
                }
            } catch (error) {
                console.error('Error loading categories:', error);
            }
        };

        fetchData();

        // Cleanup function to prevent setting state on unmounted component
        return () => {
            isMounted = false;
        };
    }, []);

    const loadCategories = async () => {
        try {
            console.log('Fetching categories...');
            const response = await fetch('http://localhost:3001/api/categories');
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            const data = await response.json();
            console.log('Received categories data:', data);
            setCategories(data);
        } catch (error) {
            console.error('Error loading categories:', error);
        }
    };

    const searchCategory = async () => {
        try {
            console.log('Searching categories with term:', searchTerm);
            const encodedSearchTerm = encodeURIComponent(searchTerm.trim());
            const url = `http://localhost:3001/api/categories${encodedSearchTerm ? `?search=${encodedSearchTerm}` : ''}`;
            
            console.log('Fetching from URL:', url);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Failed to search categories');
            }
            
            const data = await response.json();
            console.log('Search results:', data);
            setCategories(data);
        } catch (error) {
            console.error('Error searching categories:', error);
        }
    };

    // Debounce search to avoid too many requests
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm !== '') {
                searchCategory();
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Add a function to reset search
    // const resetSearch = async () => {
    //     setSearchTerm('');
    //     loadCategories();
    // };

    const handleAddCategory = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCategory)
            });

            if (!response.ok) {
                throw new Error('Failed to add category');
            }

            // Refresh the categories list
            loadCategories();
            // Reset form and close modal
            setNewCategory({ name: '' });
            setShowAddModal(false);
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    return (
        <div>
            <div className="navbar-cate">
                <a href="#"><img src={logo} alt="Logo" style={{ width: "200px", height: "80px" }} /></a>
                <a href="#" className="navgeneral">General</a>
                <a href="#" className="navstore">Management Store</a>
                <div className="logo-container-cate">
                    <a href="#"><img src={logomeo} alt="Logo" style={{ width: "70px", height: "70px", float: "right" }} /></a>
                </div>
            </div>

            <div className="breadcrumb-cate">
                <a href="#">Management</a> &gt; <span style={{ color: "#007bff" }}>Categories</span>
            </div>

            <div className="categories-cate">Categories</div>

            <div className="containe-cate">
                <div className="search-bar-cate">
                    <div style={{ display: "flex", border: "1px solid", borderRadius: "10px" }}>
                        <input 
                            type="text" 
                            id="searchInput-cate" 
                            placeholder="Search for categories..." 
                            value={searchTerm}
                            onChange={(e) => {
                                const value = e.target.value;
                                setSearchTerm(value);
                                if (value === '') {
                                    loadCategories();
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    searchCategory();
                                }
                            }}
                        />
                        <button className="search" onClick={searchCategory}>
                            <img src={search} alt="Search" />
                        </button>
                    </div>
                    <button 
                        className="add-category-button-cate"
                        onClick={() => setShowAddModal(true)}
                    >
                        Add category
                    </button>
                </div>

                {/* Add Category Modal */}
                {showAddModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <h2>Add New Category</h2>
                            <div className="form-group">
                                <label>Category Name:</label>
                                <input
                                    type="text"
                                    value={newCategory.name}
                                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                                    placeholder="Enter category name"
                                />
                            </div>
                            <div className="modal-buttons">
                                <button onClick={handleAddCategory}>Add</button>
                                <button onClick={() => {
                                    setShowAddModal(false);
                                    setNewCategory({ name: '' });
                                }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

                <table className="table-cate">
                    <thead>
                    <tr>
                        <th>
                            <input type="checkbox"/>
                        </th>
                        <th>Category code</th>
                        <th>Category name</th>
                        <th>Quantity of products</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((category) => {
                        console.log('Rendering category:', category);
                        return (
                            <tr key={category.id_categories}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>{category.id_categories}</td>
                                <td>{category.name}</td>
                                <td>0</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
