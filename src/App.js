import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import PLP from './components/ProductListingPage';
import Cart from './components/Cart';
import PDP from './components/ProductDetailPage';
import items from './core/constants';
import { StoreContextProvider } from './core/store-context';

const App = () => {
  const [storeContext] = useState({ items: items, cartItems: [] });
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={props => <StoreContextProvider value={storeContext}><PLP items={items} /></StoreContextProvider>}></Route>
        <Route path="/cart" render={(props) => <StoreContextProvider value={storeContext}><Cart  {...props} /></StoreContextProvider>}></Route>
        <Route path={`/pdp/:id`} render={(props) => <StoreContextProvider value={storeContext}><PDP {...props} /> </StoreContextProvider>} />
      </Switch>
    </BrowserRouter>
  )

}

export default App;
