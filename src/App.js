import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
