import { connect } from 'react-redux';
import { flippedToOpened, flippedToClosed } from '../../redux/actionCreators';

function Tile({ store, card }) {
  return (
    <div
      className={`card ${card.isVisible ? 'flip' : ''}`}
      onClick={() => {
        card.isVisible === false
          ? store.dispatch(flippedToOpened(true, card.id))
          : store.dispatch(flippedToClosed(false, card.id));
      }}
    >
      <div className='flipper'>
        <div className='frontSide'>{card.id}</div>
        <div className='cover' style={{ background: card.color }}></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const stateCardArray = state.cardsArrayReducer.cardsArray.map((item) => {
    return item;
  });
  return {
    cardsArrayFromState: stateCardArray,
  };
};

const mapDispatchToProps = {
  flippedToOpened,
  flippedToClosed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
