const { addItem } = require('../controller/index');

describe('Create Todos Function', () => {
  test('It creates a new todos, then renders it to the index page', () => {
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
    expect(req.body).toEqual({
      name: 'To do list',
      description: 'Create a todo list app',
    });
    expect(res.render.mock.calls[0][1]).toEqual(
      expect.objectContaining({
        todos: expect.any(Array),
      })
    );
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
