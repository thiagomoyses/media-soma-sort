import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Media, Soma, Sort</h1>
      <div className="row">
        <Card title='Card 1' red>X</Card>
        <Card title='Card 2' green>X</Card>
      </div>

      <div className="row">
        <Card title='Card 3' blue>Y</Card>
        <Card title='Card 4' purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
