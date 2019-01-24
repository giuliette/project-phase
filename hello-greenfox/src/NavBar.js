import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className='navigation'>
    <ul>
      <li><Link to='/'>home</Link></li>
      <li><Link to='/simple/states'>with states</Link></li>
      <li><Link to='/simple/redux'>with redux</Link></li>
    </ul>
  </nav>
)

export default NavBar;
