import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });


const setup = () => shallow(<App />);

/**
 * Finds and returns DOM Element from the Component under test
 * @param wrapper Component under test
 * @param query String identifying item such h1, #id, [attr]
 * @returns DOM Element
 */
const $find = (wrapper : Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>, query : string) : Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>> => wrapper.find(query);

describe("The <App /> Component renders and behaves as expected", () => {

  let wrapper : Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => wrapper = setup());

  test('renders App component', () => {
    const appComponent = $find(wrapper, `[data-test="App"]`);
    expect(appComponent.exists()).toBe(true);
  });

  
  it('renders increment button', () => {  
    const incrementButton = $find(wrapper, `[data-test="increment-button"]`);
    expect(incrementButton.exists()).toBe(true);
  });

  it('renders a decrement button', () => {
    const decrementButton = $find(wrapper, `[data-test="decrement-button"]`);
    expect(decrementButton.exists()).toBe(true);
  });

  it('renders Counter display', () => {  
    const display = $find(wrapper, 'h1');
    expect(display.exists()).toBe(true);
  });

  it('Counter starts at 0', () => {
    const counter = $find(wrapper, `[data-test='counter-span']`);
    expect(parseInt(counter.text())).toBe(0);
  });

  //Prevent Count from going negative and display error 
  it('Count will not decrement below 0', () => {
    const decrementButton = $find(wrapper, `[data-test="decrement-button"]`);
    decrementButton.simulate('click');
    const counter = $find(wrapper, `[data-test='counter-span']`);
    expect(parseInt(counter.text())).toBe(0);
  });

  it('Displays error on if decrement button is clicked while count is 0', () => {
    const decrementButton = $find(wrapper, `[data-test="decrement-button"]`);
    decrementButton.simulate('click');
    const errorMessage = $find(wrapper, `[data-test="error-span"]`);
    expect(errorMessage.exists()).toBe(true);
  });

  //Clear Error on Increment
  it('Clears error on Increment', () => {
    const incrementButton = $find(wrapper, `[data-test="increment-button"]`);
    const decrementButton = $find(wrapper, `[data-test="decrement-button"]`);
    
    //Generate Error
    decrementButton.simulate('click');

    //Verify Error Message is Visible
    const errorMessageVisible : boolean = $find(wrapper, `[data-test="error-span"]`).exists();
    if(!errorMessageVisible) {
      throw new Error('Error message not visible');
    }

    //Increment to clear error
    incrementButton.simulate('click');

    const postIncrementErrorMessageVisible = $find(wrapper, `[data-test="error-span"]`).exists();
    expect(postIncrementErrorMessageVisible).toBe(false);
  });

  it('clicking button increments Counter Display', () => {
    const incrementButton = $find(wrapper, `[data-test="increment-button"]`);
    incrementButton.simulate('click');
    const counter = $find(wrapper, `[data-test='counter-span']`);
    expect(parseInt(counter.text())).toBe(1);
  }); 

});