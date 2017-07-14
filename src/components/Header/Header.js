import React from 'react';
import Link from '../../components/Link';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/blocks">Blocks</Link>
        <br />
        <Link to="/news">News</Link>
      </div>
    );
  }
}
