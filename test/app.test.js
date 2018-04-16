import 'babel-polyfill'

import {App} from '../src/index.tsx'
import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})


test('basic render', () => {
  const component = shallow(<App message="Finished!"/>)
  expect(component).toMatchSnapshot()
})

test('basic render', async () => {
  const component = shallow(<App message="Finished!"/>)
  expect(component).toMatchSnapshot()
})
