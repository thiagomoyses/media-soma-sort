import './App.css';
import Components from './components/index';

function App() {
  return (
    <div className="App">
      <h1>Operations</h1>
      <div className="row">
        <Components.Gap />
      </div>

      <div className="row">
        <Components.Average />
        <Components.Sum />
        <Components.Sort />
      </div>
    </div>
  );
}

export default App;
