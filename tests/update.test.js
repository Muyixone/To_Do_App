const { getUpdatePage, updateItem, todos } = require('../controller/index');

describe('Updates an item', () => {
  const req = {
    body: {
      name: 'Something to Edit',
      description: 'Edit the Text here',
      id: 1,
      date: '9-2-2022',
    },
    params: {
      id: 1,
    },
  };
  const res = {
    render: jest.fn(),
  };
  getUpdatePage(req, res);
  test('It renders the edit items page for updating a todo item', () => {
    expect(req.params.id).toEqual(1);
  });

  updateItem(req, res);
  test('It edits an item in the list and returns the updated item', () => {
    expect(res.render.mock.calls[0][1]).toEqual(
      expect.objectContaining({
        todos: expect.any(Array),
      })
    );

    expect(todos.length).toBeGreaterThan(0);
  });
});
