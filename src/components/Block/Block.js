/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class Block extends React.Component {
  static propTypes = {
    block: PropTypes.shape().isRequired,
  };

  render() {
    return (
      <ul>
        <li>Author: {this.props.block.author}</li>
        <li>Difficulty: {this.props.block.difficulty}</li>
        <li>Gas Limit: {this.props.block.gasLimit}</li>
        <li>Gas USed: {this.props.block.gasUsed}</li>
        <li>Hash: {this.props.block.hash}</li>
        <li>Miner: {this.props.block.miner}</li>
        <li>Number: {this.props.block.number}</li>
        <li>Parent Hash: {this.props.block.parentHash}</li>
        <li>Signature: {this.props.block.signature}</li>
        <li>Size: {this.props.block.size}</li>
        <li>Time Stamp: {this.props.block.timestamp}</li>
        <li>Transactions {this.props.block.transactions}</li>
      </ul>
    );
  }
}
