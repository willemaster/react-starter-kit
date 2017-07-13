import React from 'react';
import Layout from '../../components/Layout';

async function action() {
  return {
    chunks: ['home'],
    title: 'React Starter Kit',
    component: <Layout />,
  };
}

export default action;
