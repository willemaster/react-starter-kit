import { GraphQLString as StringType } from 'graphql';
import { getDefaultAccount } from '../../services/ethereumClient';

const defaultAccount = {
  type: StringType,
  resolve() {
    const data = getDefaultAccount();
    return data;
  },
};

export default defaultAccount;
