import React from 'react';
import { connect } from 'react-redux';
import Blocks from '../Blocks';
import { fetchBlocks } from '../../actions/blocks';

@connect(store => ({
  blocks: store.blocks.blocks,
  store,
}))
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchBlocks());
  }

  render() {
    return (
      <div>
        <h2>Blocks</h2>
        <Blocks blocks={this.props.blocks} />
      </div>
    );
  }
}
