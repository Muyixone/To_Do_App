const express = require('express');

const router = express.Router();
const {
  addItem,
  updateItem,
  getUpdatePage,
  deleteItem,
} = require('../controller/index');

router.post('/addtask', addItem);

router.get('/updatetask/:id', getUpdatePage);
router.post('/updatetask/:id', updateItem);

router.post('/removetask/:id', deleteItem);

module.exports = router;
