import Header from '../../components/Header/Header';
import Playfield from '../../components/Playfield/Playfield';
import store from '../../redux/store';

function App() {
  return (
    <div className='app'>
      <Header store={store} />
      <Playfield store={store} />
    </div>
  );
}

export default App;
