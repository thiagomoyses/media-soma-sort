import './App.css';
import Gap from './components/Gap';
import Average from './components/Average';
import Sort from './components/Sort';
import Sum from './components/Sum';

function App() {
  return (
    <div className="App">
      <h1>Media, Soma, Sort</h1>
      <div className="row">
        <Gap>X</Gap>
      </div>

      <div className="row">
        <Average />
        <Sum />
        <Sort />
      </div>
    </div>
  );
}

export default App;
