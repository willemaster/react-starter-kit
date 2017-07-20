/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import blocks from './queries/blocks';
import news from './queries/news';
import pictures from './queries/pictures';
import accounts from './queries/accounts';
import setDefaultAccount from './mutations/setDefaultAccount';
import submitCanvas from './mutations/submitCanvas';

const MutationType = new ObjectType({
  name: 'Mutation',
  description: 'These are the things we can change',
  fields: {
    setDefaultAccount,
    submitCanvas,
  },
});

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      blocks,
      news,
      pictures,
      accounts,
    },
  }),
  mutation: MutationType,
});

export default schema;
