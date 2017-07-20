import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const SetDefaultAccountType = new ObjectType({
  name: 'SetDefaultAccount',
  fields: {
    hash: { type: StringType },
  },
});

export default SetDefaultAccountType;
