const dayjs = require('dayjs');
const todos = [];

const addItem = (req, res, next) => {
  const { name, description } = req.body;
  try {
    todos.push({
      name: name,
      description: description,
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

const deleteItem = (req, res, next) => {};

module.exports = {
  addItem,
  updatetask,
  deleteItem,
};
