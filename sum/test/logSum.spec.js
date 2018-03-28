// logSum.spec.js
/* eslint-env jest  */

import logSum from '../logSum'
import * as sumModule from '../sum'

describe('logSum library', () => {
  it('call sum correctly', () => {
    sumModule.default = jest.fn(sumModule.default)
    logSum(3, 4)
    expect(sumModule.default).toHaveBeenCalledTimes(1)
    expect(sumModule.default).toHaveBeenCalledWith(3, 4)
  })
})
