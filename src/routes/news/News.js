import React from 'react';
import Header from '../../components/Header';
import News from '../../components/News';

class NewsRoute extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <News />
      </div>
    );
  }
}

export default NewsRoute;
