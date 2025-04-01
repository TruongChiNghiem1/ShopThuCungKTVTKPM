import { useState } from "react"
import "../../Styles/ProductFilter.css"
import { FaStar } from "react-icons/fa"
import { FiFilter } from "react-icons/fi"

const ProductFilter = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [priceRange, setPriceRange] = useState(5000000)
    const [categories, setCategories] = useState({
        dogs: false,
        cats: false,
        birds: false,
        collars: false,
        funyToys: false,
        other: false,
    })
    const [ratings, setRatings] = useState({
        5: false,
        4: false,
        3: false,
        2: false,
        1: false,
    })

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPriceRange(e.target.value)
    }

    const handleCategoryChange = (category) => {
        setCategories({
            ...categories,
            [category]: !categories[category],
        })
    }

    const handleRatingChange = (rating) => {
        setRatings({
            ...ratings,
            [rating]: !ratings[rating],
        })
    }

    const resetFilters = () => {
        setSearchTerm("")
        setPriceRange(5000000)
        setCategories({
            dogs: false,
            cats: false,
            birds: false,
            collars: false,
            funyToys: false,
            other: false,
        })
        setRatings({
            5: false,
            4: false,
            3: false,
            2: false,
            1: false,
        })
    }

    const applyFilters = () => {
        const filters = {
            searchTerm,
            priceRange,
            categories,
            ratings,
        }

        if (onFilterChange) {
            onFilterChange(filters)
        }
    }

    const renderStars = (count) => {
        const stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(<FaStar key={i} className={i < count ? "star-filled" : "star-empty"} />)
        }
        return stars
    }

    return (
        <div className="filter-container w-18rem">
            <div className="filter-header">
                <FiFilter className="filter-icon" />
                <h3>Filter</h3>
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search product ..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>

            <div className="filter-section">
                <h4 className="section-title">Category</h4>
                <div className="category-grid">
                    <div className="category-item">
                        <input type="checkbox" id="dogs" checked={categories.dogs} onChange={() => handleCategoryChange("dogs")} />
                        <label htmlFor="dogs">Dogs</label>
                    </div>
                    <div className="category-item">
                        <input
                            type="checkbox"
                            id="collars"
                            checked={categories.collars}
                            onChange={() => handleCategoryChange("collars")}
                        />
                        <label htmlFor="collars">Collars</label>
                    </div>
                    <div className="category-item">
                        <input type="checkbox" id="cats" checked={categories.cats} onChange={() => handleCategoryChange("cats")} />
                        <label htmlFor="cats">Cats</label>
                    </div>
                    <div className="category-item">
                        <input
                            type="checkbox"
                            id="funyToys"
                            checked={categories.funyToys}
                            onChange={() => handleCategoryChange("funyToys")}
                        />
                        <label htmlFor="funyToys">Funy Toys</label>
                    </div>
                    <div className="category-item">
                        <input
                            type="checkbox"
                            id="birds"
                            checked={categories.birds}
                            onChange={() => handleCategoryChange("birds")}
                        />
                        <label htmlFor="birds">Birds</label>
                    </div>
                    <div className="category-item">
                        <input
                            type="checkbox"
                            id="other"
                            checked={categories.other}
                            onChange={() => handleCategoryChange("other")}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
            </div>

            <div className="filter-section">
                <h4 className="section-title">Price</h4>
                <input
                    type="range"
                    min="0"
                    max="5000000"
                    value={priceRange}
                    onChange={handlePriceChange}
                    className="price-slider"
                />
                <p className="price-label">Price: 0 VND - {new Intl.NumberFormat("vi-VN").format(priceRange)}VND</p>
            </div>

            <div className="filter-section">
                <h4 className="section-title">Rating</h4>
                <div className="rating-list">
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <div className="rating-item" key={rating}>
                            <input
                                type="checkbox"
                                id={`rating-${rating}`}
                                checked={ratings[rating]}
                                onChange={() => handleRatingChange(rating)}
                            />
                            <label htmlFor={`rating-${rating}`} className="rating-label">
                                <div className="stars-container">{renderStars(rating)}</div>
                                <span>{rating} sao</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-actions">
                <button className="reset-btn" onClick={resetFilters}>
                    Thiết lập lại
                </button>
                <button className="apply-btn" onClick={applyFilters}>
                    Lọc
                </button>
            </div>
        </div>
    )
}

export default ProductFilter
