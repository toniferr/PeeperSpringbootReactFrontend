import logo from './logo.svg';
import './App.css';
import AppBar from './components/Appbar';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
        <AppBar></AppBar>
        <Student></Student>
    </div>
    /**<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola, soy Toni.
          <br/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
