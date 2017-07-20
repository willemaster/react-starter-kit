import {
  GraphQLObjectType as ObjectType,
  GraphQLBoolean as BoolType,
} from 'graphql';

const SubmitCanvasType = new ObjectType({
  name: 'SubmitCanvas',
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

export default SubmitCanvasType;
