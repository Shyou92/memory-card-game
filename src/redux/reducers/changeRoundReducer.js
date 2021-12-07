import { INCREASE_ROUND_POINT } from '../types';

const initialState = {
  round: 1,
};

function changeRoundReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_ROUND_POINT:
      return {
        ...state,
        round: state.round + 1,
      };
    default:
      return state;
  }
}

export default changeRoundReducer;
