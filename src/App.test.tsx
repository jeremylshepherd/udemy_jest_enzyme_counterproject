import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);
const $find = (wrapper : Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, query : string) : Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>> => wrapper.find(query);

describe("The <App /> Component renders and behaves as expected", () => {
  const wrapper = setup();
  const button = $find(wrapper, `[data-test="button"]`);
  const display = $find(wrapper, 'h1');

  test('renders App component', () => {
    const appComponent = $find(wrapper, `[data-test="App"]`);
    expect(appComponent.exists()).toBe(true);
  });

  it('renders increment button', () => {  
    expect(button.exists()).toBe(true);
  });

  it('renders Counter display', () => {  
    expect(display.exists()).toBe(true);
  });

  it('Counter starts at 0', () => {
    const counter = $find(wrapper, 'span');
    expect(parseInt(counter.text())).toBe(0);
  });

  it('clicking button increments Counter Display', () => {
    button.simulate('click');
    const counter = $find(wrapper, 'span');
    expect(parseInt(counter.text())).toBe(1);
  });

});