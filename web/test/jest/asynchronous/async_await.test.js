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

test('the data is peanut butter', async () => {
  const data = await fetchData_resolve();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData_reject();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(fetchData_resolve()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData_reject()).rejects.toMatch('error');
});
