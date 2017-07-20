import { connect } from 'react-redux';
import React from 'react';
import { fetchPictures } from '../../actions/pictures';
import Picture from '../Picture';

@connect(store => ({
  pictures: store.pictures.pictures,
}))
export default class Pictures extends React.Component {

  getPictures = () => {
    this.props.dispatch(fetchPictures());
  }

  render() {
    const p = this.props.pictures.map(pic => <Picture picture={pic} />);
    return (
      <div>
        <h1>Existing pictures</h1>
        <button onClick={this.getPictures}>Get pictures</button>
        <div>{p}</div>
      </div>
    );
  }
}
