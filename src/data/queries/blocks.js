import { GraphQLList as List } from 'graphql';
import { getRecentBlocks } from '../../services/ethereumClient';
import BlockType from '../types/BlockType';

const blocks = {
  type: new List(BlockType),
  resolve() {
    const data = getRecentBlocks();
    return data;
  },
};

export default blocks;
