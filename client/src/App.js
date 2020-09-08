import React from 'react';

import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Question from './components/Question';
import './App.css';
import useApplicationData from './hooks/useApplicationData';


function App() {
  const {answer, setAnswer} = useApplicationData();

  return (
  <>
    <Router>
      <Nav />    
      <Switch>
        <Route exact path="/">
            <LandingPage />
        </Route>
        <Route path="/question">
            <Question answer={answer}/>
        </Route>
        <Route path="/nextQuestion">
            <Question answer={answer}/>
        </Route>
      </Switch>
      <Footer />

    </Router>
  </>
  );
}

export default App;
