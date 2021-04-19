import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // returned function will be called on component unmount
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  console.log('currentUser', currentUser);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
