import React, { Component } from 'react';
import './Landing.css';
import HeaderLanding from '../Header/HeaderLanding.js';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="App">
          <HeaderLanding />
        <div className="shelf_link_container">
          <Link to="/shelves/shelfA"><p>Shelf A</p></Link>
          <Link to="/shelves/shelfB"><p>Shelf B</p></Link>
          <Link to="/shelves/shelfC"><p>Shelf C</p></Link>
          <Link to="/shelves/shelfD"><p>Shelf D</p></Link>
        </div>
      </div>
    );
  }
}

export default Landing;
