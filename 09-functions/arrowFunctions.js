const function1 = function () {
  console.log('This is an expressive function.');
};

/* const function2 = () => {
  console.log('This is an arrow function.');
}; */

/* Another way of expressing the arrow function when 
it only contains a single line of code inside its braces */

/* const function2 = () => 'This is an arrow function.';

console.log(function2()); */

// Example of parameters and arguments inside an arrow function:
const learning = (technology) => `Learning ${technology}`;
console.log(learning('JavaScript'));

// Example of how to use the arrow functions with the map and forEach iterators.
const shoppingCart = [
  { name: 'PlayStation 5', price: 600 },
  { name: 'Laptop HP Notebook', price: 250 },
  { name: 'Mouse HP', price: 5 },
  { name: 'Keyboard HP', price: 10 },
  { name: 'HP 32-inch monitor', price: 150 },
];

// map method
const newArray = shoppingCart.map((product) => `${product.name} - Price: ${product.price}$`);
console.log(newArray);

// forEach method
shoppingCart.forEach((product) => console.log(`${product.name} - Price: ${product.price}$`));

// Example of methods with arrow function:
const player = {
  song: '',
  play: (id) => console.log(`Playing song ${id}...`),
  pause: () => console.log(`Pausing player...`),
  delete: (id) => console.log(`Deleting song ${id}...`),
  createPlayList: (name) => console.log(`Creating the playlist ${name}`),

  set newSong(song) {
    this.song = song;
    console.log(`Adding ${song}`);
  },
  get getSong() {
    console.log(`${this.song}`);
  },
};

player.newSong = 'Enter Sandman';
player.getSong;

/* 
player.play(2);
player.pause();
player.delete(2);
player.createPlayList('Heavy Metal'); 
*/

