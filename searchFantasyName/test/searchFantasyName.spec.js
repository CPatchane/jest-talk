// searchFantasyName.spec.js
/* eslint-env jest  */

import searchFantasyName from '../searchFantasyName'

describe('searchFantasyName', () => {
  it('should return results from "am" query', () => {
    expect(searchFantasyName('am')).toMatchSnapshot()
  })
})
