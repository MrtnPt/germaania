import logo from './media/logo_white.svg';
import './App.css';

const APP_NAME = "GerMánia";

function Navbar(){
  return (
    <nav>
      <a></a>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{APP_NAME}</h1>
        <Navbar />
      </header>

    </div>
  );
}

export default App;
