import { GraphQLList as List } from 'graphql';
import { getPictures } from '../../services/ethereumClient';
import PictureType from '../types/PictureType';

const pictures = {
  type: new List(PictureType),
  async resolve() {
    const data = await getPictures();
    return data;
  },
};

export default pictures;
