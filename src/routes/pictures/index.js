import React from 'react';
import PicturesRoute from './Pictures';

async function action() {
  return {
    chunks: ['pictures'],
    title: 'Pictures',
    component: <PicturesRoute />,
  };
}

export default action;
