import { expect } from 'chai';
import designReducer from '../src/redux/designSlice.js';

describe('designReducer', () => {
  it('should handle chooseDesignStyle action', () => {
    const initialState = { design: 'neubrutalism' };
    const action = { type: 'design/chooseDesignStyle', payload: 'neumorphism' };
    const newState = designReducer(initialState, action);
    expect(newState).to.deep.equal({ design: 'neumorphism' });
  });
});
