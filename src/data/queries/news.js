/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import getNews from '../../services/newsClient';
import NewsType from '../types/NewsType';

const news = {
  type: new List(NewsType),
  async resolve() {
    const data = await getNews();

    return data;
  },
};

export default news;
