const { getUpdatePage, updateItem } = require('../controller/index');

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
    let todos = [
      {
        name: 'Edit a todo item',
        description: 'Direct to the edit page',
      },
    ];
    let date = '29-02-2022';

    expect(req.params.id).toEqual(1);
    expect(res.render).not.toHaveBeenCalledWith('edit', {
      todos: todos,
      id: 1,
      date: date,
    });
  });

  updateItem(req, res);
  test('It edits an item in the list and returns the updated item', () => {
    let todos = {
      id: req.params.id,
      date: req.params.date,
      body: 'This is a random text',
      description: 'Just a description txt',
    };
    let date = '29-02-2022';
    expect(res.render.mock.calls[0][1]).toEqual(
      expect.objectContaining({
        todos: expect.any(Array),
      })
    );

    expect(res.render).not.toHaveBeenCalledWith('edit', {
      todos,
    });
  });
});
