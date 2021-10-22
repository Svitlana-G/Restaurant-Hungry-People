
import './App.css';
import Navigation from './components/Navigation';
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
      <Navigation />
    </Router>
    // </div>
  );
}

export default App;
