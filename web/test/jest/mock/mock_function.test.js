function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);

forEach([0, 1], mockCallback);

// The mock function is called twice
test('mock function is called twice', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
})

// The first argument of the first call to the function was 0
test('first argument is 0', () => {
  expect(mockCallback.mock.calls[0][0]).toBe(0);
})

// The first argument of the second call to the function was 1
test('first argument is 1', () => {
  expect(mockCallback.mock.calls[1][0]).toBe(1);
})

// The return value of the first call to the function was 42
test('return value is 42', () => {
  expect(mockCallback.mock.results[0].value).toBe(42);
})

// This function was instantiated exactly twice
test('instances length is 2', () => {
  expect(mockCallback.mock.instances.length).toBe(2);
})

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
test(`first instances name property is 'test'`, () => {
  expect(mockCallback.mock.instances[0].name).toEqual('test');
})

// inject test values into your code:
mockCallback
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

