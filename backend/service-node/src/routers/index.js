const express = require('express');
const routerUser = require('./user');
const routerNotify = require('./notify');
const routerChat = require('./chat');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router.use('/user', routerUser);
router.use('/notify', routerNotify);
router.use('/chat', routerChat);

// Category routes
router.get('/api/categories', categoryController.getAllCategories);
router.post('/api/categories', categoryController.createCategory);

module.exports = router;