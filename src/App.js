import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import ProtectedRoute from './components/layout/ProtectedRoute';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Chat from './pages/Chat';
import Alerts from './components/layout/Alerts';
// import { seedUsers } from './utils';

function App() {
  // seedUsers()
  return (
    <Router>
      <Alerts />
      <Switch>
        <Route exact path='/' component={SignIn}/>
        <ProtectedRoute path='/feed' component={Feed} />
        <ProtectedRoute path='/profile' component={Profile} />
        <ProtectedRoute path='/matches/:id' component={Chat} />
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
