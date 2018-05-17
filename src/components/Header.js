import React from 'react';
import { Link } from 'react-router-dom';

import SortMenu from '../containers/SortMenu'

const Header = () => (
  <div className="header">
    <Link to={"/"}>
      <h1>Readable application</h1>
    </Link>
    <SortMenu />
  </div>
)

export default Header;
