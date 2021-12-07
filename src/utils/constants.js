import shuffle from './shuffle';

const cards = [
  { id: 1, color: 'red', isVisible: false },
  { id: 2, color: 'red', isVisible: false },
  { id: 3, color: 'green', isVisible: false },
  { id: 4, color: 'green', isVisible: false },
  { id: 5, color: 'blue', isVisible: false },
  { id: 6, color: 'blue', isVisible: false },
  { id: 7, color: 'coral', isVisible: false },
  { id: 8, color: 'coral', isVisible: false },
  { id: 9, color: 'purple', isVisible: false },
  { id: 10, color: 'purple', isVisible: false },
  { id: 11, color: 'yellow', isVisible: false },
  { id: 12, color: 'yellow', isVisible: false },
  { id: 13, color: 'brown', isVisible: false },
  { id: 14, color: 'brown', isVisible: false },
  { id: 15, color: 'aqua', isVisible: false },
  { id: 16, color: 'aqua', isVisible: false },
  { id: 17, color: 'lightgrey', isVisible: false },
  { id: 18, color: 'lightgrey', isVisible: false },
  { id: 19, color: 'black', isVisible: false },
  { id: 20, color: 'black', isVisible: false },
  { id: 21, color: 'silver', isVisible: false },
  { id: 22, color: 'silver', isVisible: false },
  { id: 23, color: 'pink', isVisible: false },
  { id: 24, color: 'pink', isVisible: false },
  { id: 25, color: 'violet', isVisible: false },
  { id: 26, color: 'violet', isVisible: false },
  { id: 27, color: 'beige', isVisible: false },
  { id: 28, color: 'beige', isVisible: false },
  { id: 29, color: 'magenta', isVisible: false },
  { id: 30, color: 'magenta', isVisible: false },
  { id: 31, color: 'turquoise', isVisible: false },
  { id: 32, color: 'turquoise', isVisible: false },
  { id: 33, color: 'orange', isVisible: false },
  { id: 34, color: 'orange', isVisible: false },
  { id: 35, color: 'white', isVisible: false },
  { id: 36, color: 'white', isVisible: false },
];

const cardsArray = shuffle(cards);

export default cardsArray;
