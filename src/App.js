import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Order from './components/Order/Order';
import Manage from './components/Manage/Manage';

import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail ></ProductDetail>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>



    </div>
  );
}

export default App;
