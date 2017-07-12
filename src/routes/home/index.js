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
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{blocks{author,difficulty,gasLimit,gasUsed,hash,miner,number,parentHash,signature,size,timeStamp}}',
    }),
  });

  const { data } = await resp.json();
  if (!data || !data.blocks) throw new Error('Failed to load blocks');
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: <Layout><Blocks blocks={data.blocks} /></Layout>,
  };
}

export default action;
