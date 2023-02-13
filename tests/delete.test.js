const { deleteItem, todos } = require('../controller/index');

describe('deleteItem', () => {
  const req = {
    params: {
      id: 1,
    },
  };

  const res = {
    render: jest.fn(),
  };

  it('should render index page if item is found and deleted', () => {
    deleteItem(req, res, null);
    expect(todos.length).toBe(0);
  });
});
