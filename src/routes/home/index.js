import React from 'react';
import HomeRoute from './Home';

async function action() {
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: <HomeRoute />,
  };
}

export default action;
