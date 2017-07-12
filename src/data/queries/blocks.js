/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import getRecentBlocks from '../../ethereumClient';
import BlockType from '../types/BlockType';

const blocks = {
  type: new List(BlockType),
  resolve() {
    const data = getRecentBlocks();
    return data;
  },
};

export default blocks;
