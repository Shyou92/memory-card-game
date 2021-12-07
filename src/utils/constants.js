import shuffle from './shuffle';

const cardsArray = [
  { id: 1, color: 'red', isOpened: false },
  { id: 2, color: 'red', isOpened: false },
  { id: 3, color: 'green', isOpened: false },
  { id: 4, color: 'green', isOpened: false },
  { id: 5, color: 'blue', isOpened: false },
  { id: 6, color: 'blue', isOpened: false },
  { id: 7, color: 'coral', isOpened: false },
  { id: 8, color: 'coral', isOpened: false },
  { id: 9, color: 'purple', isOpened: false },
  { id: 10, color: 'purple', isOpened: false },
  { id: 11, color: 'yellow', isOpened: false },
  { id: 12, color: 'yellow', isOpened: false },
  { id: 13, color: 'brown', isOpened: false },
  { id: 14, color: 'brown', isOpened: false },
  { id: 15, color: 'aqua', isOpened: false },
  { id: 16, color: 'aqua', isOpened: false },
  { id: 17, color: 'lightgrey', isOpened: false },
  { id: 18, color: 'lightgrey', isOpened: false },
  { id: 19, color: 'black', isOpened: false },
  { id: 20, color: 'black', isOpened: false },
  { id: 21, color: 'silver', isOpened: false },
  { id: 22, color: 'silver', isOpened: false },
  { id: 23, color: 'pink', isOpened: false },
  { id: 24, color: 'pink', isOpened: false },
  { id: 25, color: 'violet', isOpened: false },
  { id: 26, color: 'violet', isOpened: false },
  { id: 27, color: 'beige', isOpened: false },
  { id: 28, color: 'beige', isOpened: false },
  { id: 29, color: 'magenta', isOpened: false },
  { id: 30, color: 'magenta', isOpened: false },
  { id: 31, color: 'turquoise', isOpened: false },
  { id: 32, color: 'turquoise', isOpened: false },
  { id: 33, color: 'orange', isOpened: false },
  { id: 34, color: 'orange', isOpened: false },
  { id: 35, color: 'white', isOpened: false },
  { id: 36, color: 'white', isOpened: false },
];

const shuffledArray = shuffle(cardsArray);

export default shuffledArray;
