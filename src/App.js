import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './components/commons/Header';
import { CommonHeader } from './components/commons/CommonHeader';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Dashboard } from './components/Dashboard';
import { firebase } from './utils/firebase';
function App() {
  const [user, setUser] = useState();
  firebase.auth().onAuthStateChanged((currentUser) => {
    setUser(currentUser);
  });
  return (
    <div>
      <Router>
        {user ? <Header /> : <CommonHeader />}
        <Switch>
          <Route path="/" exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
