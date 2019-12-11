const { checkUrl } = require('./urlChecker');

test('Check http://www.apple.com is a valid url', () => {
  expect(checkUrl('http://www.apple.com')).toBeTruthy();
});

test('Check htp://www.apple.com is an invalid url', () => {
  expect(checkUrl('htp://www.apple.com')).toBeFalsy();
});
