/* eslint-env jest */

import React from 'react'

import StoriesList from '../../src/components/StoriesList'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

const mockStories = [
  {
    id: 1,
    title: 'Story number one',
    by: 'MissOne',
    score: 189,
    url: 'http://mock.example.com/mock1'
  },
  {
    id: 2,
    title: 'Story number two',
    by: 'MisterTwo',
    score: 145,
    url: 'http://mock.example.com/mock2'
  }
]

describe('StoriesList component', () => {
  it('should be rendered correctly', () => {
    const component = shallow(
      <StoriesList stories={mockStories} />
    ).getElement()
    expect(component).toMatchSnapshot()
  })
})
