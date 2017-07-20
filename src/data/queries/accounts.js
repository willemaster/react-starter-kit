import { GraphQLList as List } from 'graphql';
import { getAccounts } from '../../services/ethereumClient';
import AccountType from '../types/AccountType';

const accounts = {
  type: new List(AccountType),
  resolve() {
    const data = getAccounts();
    return data;
  },
};

export default accounts;
