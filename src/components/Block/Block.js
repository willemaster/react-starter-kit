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

class Block extends React.Component {
  static propTypes = {
    block: PropTypes.shape().isRequired,
  };

  render() {
    return (
      <ul>
        <li>{this.props.block.author}</li>
        <li>{this.props.block.difficulty}</li>
        <li>{this.props.block.gasLimit}</li>
        <li>{this.props.block.gasUsed}</li>
        <li>{this.props.block.hash}</li>
        <li>{this.props.block.miner}</li>
        <li>{this.props.block.number}</li>
        <li>{this.props.block.parentHash}</li>
        <li>{this.props.block.signature}</li>
        <li>{this.props.block.size}</li>
        <li>{this.props.block.timeStamp}</li>
      </ul>
    );
  }
}

export default Block;
