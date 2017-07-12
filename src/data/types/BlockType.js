/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from 'graphql';

const BlockType = new ObjectType({
  name: 'Block',
  fields: {
    author: { type: StringType },
    difficulty: { type: StringType },
    gasLimit: { type: StringType },
    gasUsed: { type: StringType },
    hash: { type: StringType },
    miner: { type: StringType },
    number: { type: IntType },
    parentHash: { type: StringType },
    signature: { type: StringType },
    size: { type: IntType },
    timeStamp: { type: IntType },
  },
});

export default BlockType;
