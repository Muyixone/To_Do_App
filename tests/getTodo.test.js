const {
  addItem,
  updateItem,
  getUpdatePage,
  deleteItem,
} = require('../controller/index');

describe('Some Crud functionalities', () => {
  test('It creates a new todo list', () => {
    const req = {
      body: {
        name: 'To do list',
        description: 'Create a todo list app',
      },
    };
    const res = {
      render: jest.fn(),
    };
    addItem(req, res);
    expect(res.render).toHaveBeenCalledWith('index', {
      todos: [
        {
          name: 'To do list',
          description: 'Create a todo list app',
          id: expect.any(String),
          day: expect.any(String),
        },
      ],
    });
  });
});
