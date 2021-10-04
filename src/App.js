import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Director from './components/Director/Director';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about/:id'>
            <About></About>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/service'>
            <Service></Service>
          </Route>
          <Route exact path='/controller'>
            <Director></Director>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;


