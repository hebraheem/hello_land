import React from 'react'
import Terms from './Terms'
import Home from './Home'
import Company from './Company'
import Contact from './Contact'
import Privacy from './Privacy'
import Blog from './Blog'
import Faq from './Faq'
import GetStarted from "./GetStarted";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/tems-and-condition">
            <Terms />
          </Route>
          <Route path="/privacy-policy">
            <Privacy />
          </Route>
          <Route path="/getstarted">
            <GetStarted />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
