import {
  FLIP_CARD_TO_OPENED,
  FLIP_CARD_TO_CLOSED,
  UPDATED_PLAYFIELD,
} from '../types';
import {
  flippedToClosedInFewSeconds,
  increaseRound,
  updatePlayfield,
} from '../actionCreators';
import cardsArray from '../../utils/constants';
import store from '../store';

const initialState = {
  cardsArray,
};
const checkCardArray = [];

function flipReducer(state = initialState, action) {
  switch (action.type) {
    case FLIP_CARD_TO_OPENED:
      return {
        ...state,
        cardsArray: state.cardsArray.map((card) => {
          if (card.id === action.payload.id) {
            const newCard = {
              id: action.payload.id,
              color: card.color,
              isVisible: true,
            };

            if (card.id === newCard.id) {
              card.isVisible = true;
              checkCardArray.push(card);
            }
            setTimeout(
              () => flippedToClosedInFewSeconds(false, newCard.id),
              5000
            );

            if (checkCardArray.length === 2) {
              if (checkCardArray[0].color === checkCardArray[1].color) {
                const newArrayState = state.cardsArray.filter((item) => {
                  if (item.isVisible !== true) {
                    return item;
                  }
                });
                store.dispatch(updatePlayfield(newArrayState));
                state.cardsArray = newArrayState;
                checkCardArray.length = 0;
                return state.cardsArray;
              } else {
                setTimeout(
                  () =>
                    state.cardsArray.map((item) => {
                      if (item.isVisible === true) {
                        flippedToClosedInFewSeconds(false, item.id);
                        item.isVisible = false;
                      }
                    }),
                  2000
                );
                store.dispatch(increaseRound());
                checkCardArray.length = 0;
              }
            }
          }
          return card;
        }),
      };
    case FLIP_CARD_TO_CLOSED:
      return {
        ...state,
        cardsArray: state.cardsArray.map((card) => {
          if (action.payload.isVisible === false) {
            const newCard = {
              id: action.payload.id,
              color: card.color,
              isVisible: false,
            };
            if (card.id === newCard.id) {
              card.isVisible = false;
              checkCardArray.length = 0;
            }
          }
          return card;
        }),
      };
    case UPDATED_PLAYFIELD:
      const newArrayState = [];
      return {
        ...state,
        cardsArray: state.cardsArray.filter((item) => {
          if (item.isVisible === false) {
            newArrayState.push(item);
          }
          state.cardsArray = newArrayState;
          return cardsArray;
        }),
      };
    default:
      return state;
  }
}

export default flipReducer;
