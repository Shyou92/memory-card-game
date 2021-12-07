import Tile from '../Tile/Tile';
import shuffledArray from '../../utils/constants';

function Playfield() {
  return (
    <section className='playfield'>
      {shuffledArray.map((t) => {
        return (
          <Tile id={t.id} key={t.id} color={t.color} isOpened={t.isOpened} />
        );
      })}
    </section>
  );
}

export default Playfield;
