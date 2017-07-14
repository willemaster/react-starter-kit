import React from 'react';
import NewsRoute from './News';

async function action() {
  return {
    chunks: ['news'],
    title: 'News',
    component: <NewsRoute />,
  };
}

export default action;
