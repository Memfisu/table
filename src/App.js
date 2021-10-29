import React from 'react';
import { Provider } from 'react-redux';
import MainLayout from '../src/containers/MainLayout';
import store from './app/store';

function App() {
  return (
      <Provider store={store}>
        <MainLayout />
      </Provider>
  )
}

export default App;
