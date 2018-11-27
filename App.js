
import React, {Component} from 'react';
import CounterApp from './src/counterapp';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

const initialState={
  counter:0
}
const reducer=(state=initialState,action) => {
  switch (action.type) {
    case 'Increase_Counter':
      return {counter:state.counter+1}
    case 'Decrease_Counter':
      return {counter:state.counter-1}
  }
  return state
}
const store = createStore(reducer)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <CounterApp/>
      </Provider>
    );
  }
}
export default App;
