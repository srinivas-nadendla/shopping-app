import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import PLP from './components/ProductListingPage';
import Cart from './components/Cart';
import PDP from './components/ProductDetailPage';
import items from './core/constants';
import { StoreContextProvider } from './core/store-context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeContext: {
        items: items,
        cartItems: []
      }
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={props => <StoreContextProvider value={this.state.storeContext}><PLP items={items} /></StoreContextProvider>}></Route>
          <Route path="/cart" render={(props) => <StoreContextProvider value={this.state.storeContext}><Cart items={items} {...props} /></StoreContextProvider>}></Route>
          <Route path={`/pdp/:id`} render={(props) => <StoreContextProvider value={this.state.storeContext}><PDP items={items} {...props} /> </StoreContextProvider>} />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;
