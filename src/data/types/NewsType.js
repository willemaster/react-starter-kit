import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const NewsType = new ObjectType({
  name: 'News',
  fields: {
    title: { type: StringType },
    url: { type: StringType },
    text: { type: StringType },
    main_image: { type: StringType },
  },
});

export default NewsType;
