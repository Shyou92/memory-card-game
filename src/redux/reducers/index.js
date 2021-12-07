import cardsArrayReducer from './tilesArrayReducer';
import flipReducer from './flipReducers';
import changeRoundReducer from './changeRoundReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cardsArrayReducer,
  flipReducer,
  changeRoundReducer,
});

export default rootReducer;
