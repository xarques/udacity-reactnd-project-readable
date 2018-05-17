import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      The page <code>{location.pathname}</code> doesn't exist
    </h3>
    Please return to the <Link to={"/"}>Readable Application</Link>
  </div>
);

export default NoMatch;
