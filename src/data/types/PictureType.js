import {
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BoolType,
} from 'graphql';

const PictureType = new ObjectType({
  name: 'Picture',
  fields: {
    tl: { type: BoolType },
    tc: { type: BoolType },
    tr: { type: BoolType },
    cl: { type: BoolType },
    cc: { type: BoolType },
    cr: { type: BoolType },
    bl: { type: BoolType },
    bc: { type: BoolType },
    br: { type: BoolType },
  },
});

export default PictureType;
