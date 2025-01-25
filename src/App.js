import logo from './logo.svg';
import './App.css';

function App() {

  const header = <nav className="nav-bar">
    <p>Logo</p>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  </nav>
  return (
 <>
   {header}
   <h1>Home page</h1>

</>
  );
}

export default App;
