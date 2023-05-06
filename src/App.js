import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from './utils/Store';
import Home from './Components/Home'
import Service from './Components/Service'
import Testimonal from './Components/Testimonal';
import Team from './Components/Team';

function App() {
  return (
    <Provider store={store}>
      <div className='relative'>
        <Header />
        <Home/>
        <Service/>
        <Testimonal />
        <Team />

      </div>
       
    </Provider>
  );
}

export default App;
