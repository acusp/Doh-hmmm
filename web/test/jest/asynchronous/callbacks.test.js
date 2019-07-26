// fetchData return data: 'peanut butter'
const fetchData = () => {
  setTimeout(() => {
    return 'peanut-butter';
  }, 1000);
}

// Don't do this!
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});

// If done() is never called, the test will fail, which is what you want to happen.
test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback);
});

