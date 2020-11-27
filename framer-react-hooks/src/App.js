import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';

function App() {
  const [icecream, seticecream] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    seticecream({ ...icecream, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!icecream.toppings.includes(topping)){
      newToppings = [...icecream.toppings, topping];
    } else {
      newToppings = icecream.toppings.filter(item => item !== topping);
    }
    seticecream({ ...icecream, toppings: newToppings });
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} icecream={icecream} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} icecream={icecream} />
        </Route>
        <Route path="/order">
          <Order icecream={icecream} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;