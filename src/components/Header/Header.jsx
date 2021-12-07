import { connect } from 'react-redux';

function Header({ round }) {
  return (
    <section className='header'>
      <h2 className='header__text'>Welcome!</h2>
      <h4 className='header__round'>Round {round}</h4>
    </section>
  );
}

const mapStateToProps = (state) => {
  const changeRound = state.changeRoundReducer.round;
  return {
    round: changeRound,
  };
};

export default connect(mapStateToProps, null)(Header);
