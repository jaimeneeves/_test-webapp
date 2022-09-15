import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplicação React (Deploy Vercel)
        </p>
        <a
          className="App-link"
          href="https://instagram.com/universojavascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universo JavaScript
        </a>
      </header>
    </div>
  );
}

export default App;
