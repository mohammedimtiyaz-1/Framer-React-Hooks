import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container">
      <h2>
        Welcome to icecream Joint🍨 
      </h2>
      <Link to="/base">
        <button>
          Create Your icecream
        </button>
      </Link>
    </div>
  )
}

export default Home;