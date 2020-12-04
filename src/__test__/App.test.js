import '@testing-library/jest-dom';
import { expect } from 'chai';
import React from 'react'
import moment from 'moment'
import App from '../App'

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(React.createElement(App));
  });

  it('should include "Now" in the header instead of a time', () => {
    expect(wrapper.find('header').text()).to.not.include(moment().format('MMMM Do YYYY'))
    expect(wrapper.find('header').text()).to.include('Now')
  });

  it('should include the ExampleComponent', () => {
    expect(wrapper.text()).to.include('<ExampleComponent />')
  });

  it('should include the TestComponent', () => {
    expect(wrapper.text()).to.include('<TestComponent />')
  });
});