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
