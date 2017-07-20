import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
} from 'graphql';

const BlockType = new ObjectType({
  name: 'Block',
  fields: {
    author: { type: StringType },
    difficulty: { type: StringType },
    gasLimit: { type: StringType },
    gasUsed: { type: StringType },
    hash: { type: StringType },
    miner: { type: StringType },
    number: { type: IntType },
    parentHash: { type: StringType },
    signature: { type: StringType },
    size: { type: IntType },
    timestamp: { type: IntType },
    transactions: { type: StringType },
  },
});

export default BlockType;
