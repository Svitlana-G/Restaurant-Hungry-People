
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
import Team from './components/Team';
import Booking from './components/Booking';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Booking />
          {/* <Switch>
            <Route path="/team" component={Team} />
            <Route path="/" component={About} exact />
          </Switch> */}
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
