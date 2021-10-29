
import './App.css';
// import Navigation from './components/Navigation';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    <Router>
      <Header></Header>
    </Router>
    // </div>
  );
}

export default App;
