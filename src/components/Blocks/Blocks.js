/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
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
