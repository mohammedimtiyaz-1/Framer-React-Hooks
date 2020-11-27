import React from 'react';
import {Link} from 'react-router-dom';

function Order({ icecream }) {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {icecream.base} icecream with:</p>
      {icecream.toppings.map(topping => <div key={topping}>{topping}</div>)}

      <Link to="/">
        <button>Order One More 🍨 </button>
      </Link>
    </div>
  );
}

export default Order;