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
import Block from '../Block';

class Blocks extends React.Component {
  static propTypes = {
    blocks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  render() {
    const blocks = this.props.blocks.map(item => <Block block={item} />);

    return (
      <div>{blocks}</div>
    );
  }
}

export default Blocks;
