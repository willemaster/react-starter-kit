import React from 'react';
import BlocksRoute from './Blocks';

async function action() {
  return {
    chunks: ['blocks'],
    title: 'React Starter Kit',
    component: <BlocksRoute />,
  };
}

export default action;
