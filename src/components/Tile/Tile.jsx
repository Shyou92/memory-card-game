import { useState } from 'react';

function Tile(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleOpened = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      className={`tile ${isFlipped ? 'flip' : ''}`}
      onClick={handleOpened}
    >
      <div className='flipper'>
        <div className='frontSide'>{props.id}</div>
        <div className='cover' style={{ background: props.color }}></div>
      </div>
    </section>
  );
}

export default Tile;
