// fetchData return data: 'peanut butter'
const fetchData_resolve = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'peanut butter');
  });
}
const fetchData_reject = () => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'error');
  });
}

test('the data is peanut butter', () => {
  return fetchData_resolve().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData_reject().catch(e => expect(e).toMatch('error'));
});

test('the data is peanut butter', () => {
  return expect(fetchData_resolve()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchData_reject()).rejects.toMatch('error');
});
