import React from 'react';
import { Link } from 'react-router-dom';

const Base = ({ addBase, icecream }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <div className="base container">

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = icecream.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {icecream.base && (
        <div className="next">
          <Link to="/toppings">
            <button>Next 🔛 </button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default Base;