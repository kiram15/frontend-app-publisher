import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';


describe('Header', () => {
  it('renders the correct header', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
