import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import MainLayout from './app/containers/MainLayout';
import store from './app/store';
import Loader from './app/components/Loader/Loader';

function App() {
  return (
      <Suspense fallback={<Loader />}>
          <Provider store={store}>
            <MainLayout />
          </Provider>
      </Suspense>
  )
}

export default App;
