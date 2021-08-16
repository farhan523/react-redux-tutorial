import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import FetchData from './components/FetchData'

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer /> */}
        <FetchData />

      </div>
    </Provider>
  );
}

export default App;
