
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
import Galerie from './components/Galerie';
import Menu from './components/Menu';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/team" component={Team} />
            <Route path="/booking" component={Booking} />
            <Route path="/menu" component={Menu} />
            <Route path="/galerie" component={Galerie} />
            <Route path="/events" component={Events} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={About} exact />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
