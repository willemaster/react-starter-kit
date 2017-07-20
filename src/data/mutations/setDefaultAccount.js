import { GraphQLString as StringType, GraphQLNonNull } from 'graphql';
import AccountType from '../types/AccountType';

const setDefaultAccount = {
  type: AccountType,
  description: 'Set default account.',
  args: {
    hash: { type: new GraphQLNonNull(StringType) },
  },
  resolve: (value, { hash }) => {
    console.log(`deleting: ${hash}`); // eslint-disable-line no-console
  },
};

export default setDefaultAccount;
