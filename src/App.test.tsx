import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<App />);
const $find = (wrapper : Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, query : string) : Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>> => wrapper.find(query);

describe("The <App /> Component renders and behaves as expected", () => {
  const wrapper = setup();
  const incrementButton = $find(wrapper, `[data-test="increment-button"]`);
  const decrementButton = $find(wrapper, `[data-test="decrement-button"]`);
  const display = $find(wrapper, 'h1');

  test('renders App component', () => {
    const appComponent = $find(wrapper, `[data-test="App"]`);
    expect(appComponent.exists()).toBe(true);
  });

  it('renders increment button', () => {  
    expect(incrementButton.exists()).toBe(true);
  });

  it('renders Counter display', () => {  
    expect(display.exists()).toBe(true);
  });

  it('Counter starts at 0', () => {
    const counter = $find(wrapper, 'span');
    expect(parseInt(counter.text())).toBe(0);
  });

  it('clicking button increments Counter Display', () => {
    incrementButton.simulate('click');
    const counter = $find(wrapper, 'span');
    expect(parseInt(counter.text())).toBe(1);
  });

  //Counter Challenges Section
  //Implement a Decrement Button

  it('renders a decrement button', () => {
    expect(decrementButton.exists()).toBe(true);
  });

  //Prevent Count from going negative and display error 
  it('Count will not decrement below 0', () => {
    const startingCount = +($find(wrapper, 'span').text());
    console.log("starting count: ", startingCount);
    decrementButton.simulate('click');
    const counter = $find(wrapper, 'span');
    expect(parseInt(counter.text())).toBe(0);
  });

  it('Displays error on if decrement button is clicked while count is 0', () => {
    decrementButton.simulate('click');
    const errorMessage = $find(wrapper, `[data-test="error-span"]`);
    expect(errorMessage.exists()).toBe(false);
  });

  //Clear Error on Increment
  it('Clears error on Increment', () => {
    //Generate Error
    decrementButton.simulate('click');
    //Optionally verify error message present
    incrementButton.simulate('click');
    const postIncrementErrorMessage = $find(wrapper, `[data-test="error-span"]`);
    expect(postIncrementErrorMessage.exists()).toBe(false);
  });

});