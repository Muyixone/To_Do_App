const dayjs = require('dayjs');

const { v4: uuidv4 } = require('uuid');
uuidv4();

let todos = [];

const addItem = (req, res, next) => {
  const { name, description } = req.body;
  try {
    todos.push({
      name: name,
      description: description,
      id: uuidv4(),
      day: dayjs().format('YYYY-MMM-DD h:m a'),
    });

    res.render('index', {
      todos: todos,
    });
  } catch (error) {
    res.render('notFound');
  }
};

const updatetask = (req, res, next) => {};

const deleteItem = (req, res, next) => {
  const id = req.params.id;

  // Find the index number of the itemToDelete
  // Return the item if it is equall to the req.params.id
  // If the itemToDelete is not equal to -1, it means it was found
  // delete the item with that index number only

  try {
    let itemToDelete = todos.findIndex((item) => item.id === id);

    if (itemToDelete !== -1) {
      todos.splice(itemToDelete, 1);

      res.render('index', {
        todos: todos,
      });
    }
  } catch (error) {
    res.render('notFound');
  }
};

module.exports = {
  addItem,
  updatetask,
  deleteItem,
};
