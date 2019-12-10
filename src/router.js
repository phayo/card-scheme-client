import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loading from './components/Loading';
import CardState from './context/card/cardVerifyState';
import NavBar from './components/NavBar'

const Verify = lazy(() => import('./components/CardVerification'));
const Stats = lazy(() => import('./components/Logs'));

// Remember to add Loading component as fallback on the suspense as prop
export default function Root() {
  return (
    <CardState>
      <Router>
        <Suspense fallback="loading...">
          <NavBar/>
          <Switch>
              <Route exact path="/" component={Verify}/>
              <Route exact path="/logs" component={Stats}/>
          </Switch>
        </Suspense>
      </Router>
    </CardState>
  );
}
