const db = require('../database');

// Function to ensure table structure
async function ensureTableStructure(conn) {
    try {
        // Drop the table if it exists and recreate with correct structure
        await conn.query(`
            CREATE TABLE IF NOT EXISTS categories (
                id_categories BIGINT NOT NULL AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                PRIMARY KEY (id_categories)
            ) ENGINE=InnoDB;
        `);
    } catch (error) {
        console.error('Error ensuring table structure:', error);
        throw error;
    }
}

const categoryController = {
    getAllCategories: async (req, res) => {
        let conn;
        try {
            console.log('Attempting to get database connection...');
            conn = await db.getConnection();
            
            // Ensure table exists with correct structure
            await ensureTableStructure(conn);
            
            const searchTerm = req.query.search;
            console.log('Search term received:', searchTerm);

            let query, params = [];
            
            if (searchTerm && searchTerm.trim()) {
                query = `
                    SELECT id_categories, name 
                    FROM categories 
                    WHERE CAST(id_categories AS CHAR) LIKE ? 
                    OR LOWER(name) LIKE LOWER(?)
                `;
                const searchPattern = `%${searchTerm.trim()}%`;
                params = [searchPattern, searchPattern];
            } else {
                query = 'SELECT id_categories, name FROM categories ORDER BY id_categories';
            }

            console.log('Executing query:', query, 'with params:', params);
            const categories = await conn.query(query, params);
            console.log('Query results:', categories);

            const processedCategories = categories.map(category => ({
                id_categories: category.id_categories.toString(), // Convert BIGINT to string
                name: category.name
            }));

            console.log('Sending processed categories:', processedCategories);
            res.json(processedCategories);

        } catch (error) {
            console.error('Error in getAllCategories:', error);
            res.status(500).json({ 
                message: 'Error fetching categories',
                details: error.message 
            });
        } finally {
            if (conn) {
                conn.release();
            }
        }
    },

    createCategory: async (req, res) => {
        let conn;
        try {
            const { name } = req.body;
            
            if (!name || name.trim() === '') {
                return res.status(400).json({
                    message: 'Category name is required'
                });
            }

            conn = await db.getConnection();
            
            // Ensure table exists with correct structure
            await ensureTableStructure(conn);

            // Check for duplicate names
            const existing = await conn.query(
                'SELECT name FROM categories WHERE name = ?', 
                [name.trim()]
            );

            if (existing.length > 0) {
                return res.status(400).json({
                    message: 'A category with this name already exists'
                });
            }
            
            // Insert new category
            const result = await conn.query(
                'INSERT INTO categories (name) VALUES (?)',
                [name.trim()]
            );

            console.log('Category created:', result);

            // Get the newly created category
            const newCategory = await conn.query(
                'SELECT id_categories, name FROM categories WHERE id_categories = ?',
                [result.insertId]
            );

            res.status(201).json({
                message: 'Category created successfully',
                category: {
                    id_categories: newCategory[0].id_categories.toString(), // Convert BIGINT to string
                    name: newCategory[0].name
                }
            });

        } catch (error) {
            console.error('Error creating category:', error);
            res.status(500).json({
                message: 'Error creating category',
                details: error.message
            });
        } finally {
            if (conn) {
                conn.release();
            }
        }
    }
};

module.exports = categoryController; 