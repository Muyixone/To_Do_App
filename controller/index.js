const todos = [];

const addItem = (req, res, next) => {
  const { name, description } = req.body;
  todos.push({ name: name, description: description });

  console.log(todos);

  res.redirect('/');
};

const updatetask = (req, res, next) => {};

const deleteItem = (req, res, next) => {};

module.exports = {
  addItem,
  updatetask,
  deleteItem,
};
