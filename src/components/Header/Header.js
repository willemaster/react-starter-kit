import React from 'react';
import Link from '../Link';
import AccountSelector from '../AccountSelector';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/blocks">Blocks</Link>
          <br />
          <Link to="/news">News</Link>
          <br />
          <Link to="/pictures">Pictures</Link>
        </div>
        <div>
          <AccountSelector />
        </div>
      </div>
    );
  }
}
