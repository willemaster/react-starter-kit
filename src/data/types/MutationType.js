// import {
//   GraphQLObjectType as ObjectType,
//   GraphQLString as StringType,
//   GraphQLNonNull,
// } from 'graphql';

// import AccountType from './AccountType';

// const MutationType = new ObjectType({
//   name: 'SetDefaultAccount',
//   description: 'These are the things we can change',
//   fields: () => ({
//     setDefaultAccount: {
//       type: AccountType, // return type?
//       description: 'Set default account.',
//       args: {
//         hash: { type: new GraphQLNonNull(StringType) },
//       },
//       resolve: (value, { hash }) => {
//         console.log('deleting: ' + hash);
//       },
//     },
//   }),
// });

// export default MutationType;
