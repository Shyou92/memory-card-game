import { connect } from 'react-redux';
import Card from '../Card/Card';

function Playfield({ store, stateArray }) {
  return (
    <section className='playfield'>
      {stateArray.length === 0 ? (
        <p className='playfield__won-text'>Congratulations! You won!</p>
      ) : (
        stateArray.map((t) => {
          return <Card card={t} key={t.id} store={store} />;
        })
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  const stateArray = state.cardsArrayReducer.cardsArray;
  return {
    stateArray,
  };
};

export default connect(mapStateToProps, null)(Playfield);
