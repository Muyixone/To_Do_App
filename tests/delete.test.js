const { deleteItem } = require('../controller/index');

describe('deleteItem', () => {
  const req = {
    params: {
      id: 1,
    },
  };

  const res = {
    render: jest.fn(),
  };

  let todos = [
    {
      name: 'To do list',
      description: 'Create a todo list app',
      id: expect.any(String),
      day: expect.any(String),
    },
  ];

  it('should render index page if item is found and deleted', () => {
    deleteItem(req, res, null);
    expect(res.render).toHaveBeenCalledWith('index', {
      todos,
    });
    expect(todos.length).toBe(0);
  });
});
