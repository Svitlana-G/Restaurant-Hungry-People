
import './App.css';
// import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
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
      <Header />
      <About />
      <Footer />
    </Router>
    // </div>
  );
}

export default App;
