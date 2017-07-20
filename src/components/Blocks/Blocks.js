import { connect } from 'react-redux';
import React from 'react';
import Block from '../Block';
import { fetchBlocks } from '../../actions/blocks';

@connect(store => ({
  blocks: store.blocks.blocks,
}))
export default class Blocks extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchBlocks());
  }

  render() {
    const blocks = this.props.blocks.map(item => <Block block={item} />);

    return (
      <div>{blocks}</div>
    );
  }
}
