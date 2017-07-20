import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const AccountType = new ObjectType({
  name: 'Account',
  fields: {
    hash: { type: StringType },
  },
});

export default AccountType;
