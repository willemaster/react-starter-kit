import { GraphQLString as StringType, GraphQLNonNull } from 'graphql';
import SetDefaultAccountType from '../types/SetDefaultAccountType';
import { setDefaultAccount as ethSetDefaultAccount } from '../../services/ethereumClient';

const setDefaultAccount = {
  type: SetDefaultAccountType,
  description: 'Set default account.',
  args: {
    hash: { type: new GraphQLNonNull(StringType) },
  },
  resolve: (value, { hash }) => {
    ethSetDefaultAccount(hash);

    return { hash };
  },
};

export default setDefaultAccount;
