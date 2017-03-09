import { helloEndpointRoute } from './routes'

// eslint-disable-next-line import/prefer-default-export
test('helloEndpointRoute', () => {
  expect(helloEndpointRoute()).toBe('/ajax/hello/:num')
  expect(helloEndpointRoute(123)).toBe('/ajax/hello/123')
})
