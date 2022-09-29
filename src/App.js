import logo from './logo.svg';
import './App.css';
import Body from './Component/Body/Body';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1 className='page-title'>Game-Planner</h1>
        <h2>Select Your Game plane</h2>
      </div>
      <Body></Body>
    </div>
  );
}

export default App;
