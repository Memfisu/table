import { Provider } from 'react-redux';
import MainLayout from './app/containers/MainLayout';
import store from './app/store';
import './stylesheets/main.scss';

function App() {
  return (
      <Provider store={store}>
        <MainLayout />
      </Provider>
  )
}

export default App;
