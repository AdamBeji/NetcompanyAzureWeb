import logo from './net2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <br></br>
        <a
          className="App-link"
          href="https://netcompany.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about the company
        </a>
      </header>
    </div>
  );
}

export default App;
