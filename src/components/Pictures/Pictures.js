import { connect } from 'react-redux';
import React from 'react';
import { fetchPictures } from '../../actions/pictures';
import Picture from '../Picture';
import { getDefaultAccount } from '../../services/ethereumClient';

@connect(store => ({
  pictures: store.pictures.pictures,
  selectedAccountHash: store.accounts.selectedAccountHash,
}))
export default class Pictures extends React.Component {

  getPictures = () => {
    this.props.dispatch(fetchPictures());
  }

  getDefaultAccount = () => {
    const result = getDefaultAccount();
  }

  render() {
    const p = this.props.pictures.map(pic => <Picture picture={pic} />);
    return (
      <div>
        <button onClick={this.getPictures}>Get pictures</button>
        <button onClick={this.getDefaultAccount}>Get default account</button>
        <div>{p}</div>
      </div>
    );
  }
}
