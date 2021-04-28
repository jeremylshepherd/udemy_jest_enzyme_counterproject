import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);
const _$ = (wrapper, query: string) => wrapper.find(query);

describe("The <App /> Component renders and behaves as expected", () => {
  const wrapper = setup();
  const button = _$(wrapper, `[data-test="button"]`);
  const display = _$(wrapper, 'h1');

  test('renders App component', () => {
    const appComponent = _$(wrapper, `[data-test="App"]`);
    expect(appComponent.exists()).toBe(true);
  });

  it('renders increment button', () => {  
    expect(button.exists()).toBe(true);
  });

  it('renders Counter display', () => {  
    expect(display.exists()).toBe(true);
  });

  it('Counter starts at 0', () => {
    const counter = _$(wrapper, 'span');
    expect(parseInt(counter.text())).toBe(0);
  });

  it('clicking button increments Counter Display', () => {
    button.simulate('click');
    const counter = _$(wrapper, 'span');
    expect(parseInt(counter.text())).toBe(1);
  });

});