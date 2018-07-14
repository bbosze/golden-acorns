import React from 'react';
import App from '../components/Navbar';
import { shallow } from 'enzyme';

describe ('<Navbar />', () => {
  it('renders 1 <Navbar /> component', () => {
    const component = shallow(<Navbar />);
    expect(component)..toBeDefined();
  });
});
