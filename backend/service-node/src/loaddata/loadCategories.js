const Joi = require('joi');
const pool = require('../database');

// Define the category schema for validation
const categorySchema = Joi.object({
    id_categories: Joi.number().required(),
    name: Joi.string().required(),
    
    // Add other fields as needed
});

// Function to load categories
async function loadCategories() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM categories');
        
        // Validate each category against the schema
        const validatedCategories = rows.map(category => {
            const { error, value } = categorySchema.validate(category);
            if (error) {
                console.warn(`Invalid category data: ${error.message}`);
            }
            return value;
        });
        return validatedCategories;
    } catch (err) {
        console.error('Error loading categories:', err);
        return {
            success: false,
            error: err.message,
            data: null
        };
    } finally {
        if (conn) {
            conn.release();
        }
    }
}

module.exports = {
    loadCategories
}; 