import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Root from './Root';

export default function App() {
  return (
    <Provider store={store}>
      <Root></Root>
    </Provider>
  )
}