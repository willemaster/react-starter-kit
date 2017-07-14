/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Blocks from '../../components/Blocks';
import Header from '../../components/Header';

class BlocksRoute extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Blocks />
      </div>
    );
  }
}

export default BlocksRoute;
