import React from 'react';
import Header from '../../components/Header';
import Pictures from '../../components/Pictures';
import Canvas from '../../components/Canvas';

class PicturesRoute extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Pictures />
        <Canvas />
      </div>
    );
  }
}

export default PicturesRoute;
