const express = require('express');

const router = express.Router();
const { addItem, updateItem, deleteItem } = require('../controller/index');

router.post('/addtask', addItem);

// router.put('/updatetask', updateItem);

router.post('/removetask/:id', deleteItem);

module.exports = router;
