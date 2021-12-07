import {
  FLIP_CARD_TO_CLOSED,
  FLIP_CARD_TO_OPENED,
  FLIP_CARD_ADD_TO_CHECK,
  INCREASE_ROUND_POINT,
  UPDATED_PLAYFIELD,
} from './types';
import store from '../redux/store';

export function flippedToOpened(isVisibleState, cardId) {
  return {
    type: FLIP_CARD_TO_OPENED,
    payload: {
      id: cardId,
      isVisible: isVisibleState,
    },
  };
}

export function addCardToCheckState(isVisibleState, color, cardId) {
  return {
    type: FLIP_CARD_ADD_TO_CHECK,
    payload: {
      id: cardId,
      isVisible: isVisibleState,
      color,
    },
  };
}

export function flippedToClosed(isVisibleState, cardId) {
  return {
    type: FLIP_CARD_TO_CLOSED,
    payload: {
      id: cardId,
      isVisible: isVisibleState,
    },
  };
}

export function flippedToClosedInFewSeconds(isVisibleState, cardId) {
  store.dispatch(flippedToClosed(isVisibleState, cardId));
}

export function updatePlayfield(card) {
  return (dispatch) => {
    return setTimeout(
      () =>
        dispatch({
          type: UPDATED_PLAYFIELD,
          payload: {
            card: card,
          },
        }),
      2000
    );
  };
}

export function increaseRound(roundState) {
  return (dispatch) => {
    return setTimeout(() => {
      dispatch({
        type: INCREASE_ROUND_POINT,
        payload: {
          score: roundState,
        },
      });
    }, 2000);
  };
}
