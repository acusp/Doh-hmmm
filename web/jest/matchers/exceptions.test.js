function compileAndroidCode() {
  throw new ConfigError('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(ConfigError);
});

test('compiling android goes as expected', () => {
  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('ConfigError is not defined');
  expect(compileAndroidCode).toThrow(/Config/);
});
