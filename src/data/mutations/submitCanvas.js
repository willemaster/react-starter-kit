import { GraphQLBoolean as BoolType  } from 'graphql';
import SubmitCanvasType from '../types/SubmitCanvasType';
import { submitCanvas as ethSubmitCanvas } from '../../services/ethereumClient';

const submitCanvas = {
  type: SubmitCanvasType,
  description: 'Submit canvas.',
  args: {
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
  resolve: (value, { tl, tc, tr, cl, cc, cr, bl, bc, br }) => {
    console.log('here....');
    const result = ethSubmitCanvas(tl, tc, tr, cl, cc, cr, bl, bc, br);

    return result;
  },
};

export default submitCanvas;
