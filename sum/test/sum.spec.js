// sum.spec.js
/* eslint-env jest  */

import sum from '../sum'

describe('Sum library', () => {
  it('should sum 4 + 3 correctly', () => {
    expect(sum(4, 3)).toBe(7)
  })
})
