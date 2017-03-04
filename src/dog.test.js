/* eslint-disable no-undef */

import Dog from './dog'


test('Dogs bark', () => {
  const testDog = new Dog('Test')
  expect(testDog.bark()).toBe('Wah wah, I am Test')
})
