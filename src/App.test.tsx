import React from 'react';
/* import { render, screen } from '@testing-library/react'; */
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  /*  //Testing-Libray version
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  */

  //Enzyme version
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
