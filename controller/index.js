const dayjs = require('dayjs');

const { v4: uuidv4 } = require('uuid');
uuidv4();

let todos = [];
let date = dayjs().format('YYYY-MMM-DD h:m a');

////////////////////////
/*
 
*/
////////////////////////

const addItem = (req, res, next) => {
  const { name, description } = req.body;
  try {
    todos.push({
      name: name,
      description: description,
      id: uuidv4(),
      day: date,
    });

    // return res.json({ todos });

    return res.render('index', {
      todos: todos,
    });
  } catch (error) {
    // res.json({ error });
    res.render('notFound');
  }
};

const getUpdatePage = (req, res, next) => {
  const id = req.params.id;
  try {
    const todo = todos.find((item) => item.id == id);

    if (todo != -1) {
      return res.render('edit', {
        todos: todos,
        id,
        day: date,
      });
    }
  } catch (error) {
    res.render('notFound');
  }
};

const updateItem = (req, res, next) => {
  const id = req.params.id;

  try {
    let itemToUpdate = todos.findIndex((item) => item.id == id);

    if (itemToUpdate != -1) {
      todos[itemToUpdate] = {
        name: req.body.name,
        description: req.body.description,
        id: req.params.id,
        day: date,
      };
      return res.render('index', { todos });
    }
  } catch (error) {
    res.render('notFound');
  }
};

const deleteItem = (req, res, next) => {
  const id = req.params.id;

  // Find the index number of the itemToDelete
  // Return the item if it is equall to the req.params.id
  // If the itemToDelete is not equal to -1, it means it was found
  // delete the item with that index number only

  try {
    let itemToDelete = todos.findIndex((item) => item.id === id);

    if (itemToDelete !== -1) {
      const deletedItem = todos.splice(itemToDelete, 1);
      console.log(deletedItem);

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
  updateItem,
  getUpdatePage,
  deleteItem,
  todos,
};
