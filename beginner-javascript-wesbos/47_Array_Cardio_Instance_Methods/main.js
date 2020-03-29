const toppings = ['Mushrooms', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
    beyond: 10,
    beef: 5,
    pork: 7,
};

const prices = {
    corn: 234,
    hotDog: 453,
    burger: 765,
    sausage: 634,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
    { comment: 'Love the burgs', rating: 4 },
    { comment: 'Horrible Service', rating: 2 },
    { comment: 'Smoothies are great, liked the burger too', rating: 5 },
    { comment: 'Ambiance needs work', rating: 3 },
    { comment: 'I DON\'T LIKE BURGERS', rating: 1 },
];

// Instance Methods

// join()
console.log(buns.join(' or '));

// split()
const foodString = 'hot dogs,hamburgers,sausages,corn';
console.log(foodString.split(','));

// pop()
const lastItem = toppings.pop();
console.log(lastItem);

// push()
toppings.push(lastItem);
console.log(toppings);

// shift()
const firstItem = toppings.shift();
console.log(firstItem);

// unshift()
toppings.unshift(firstItem);
console.log(toppings);

let newToppings = toppings.slice(0, toppings.length - 1);
newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings, 'copy');

// make a copy
const toppingsCopy = toppings.slice(0);
toppings[0] = 'Mushy Boi';
console.log(toppingsCopy, 'copy');
console.log(toppings);

const toppingsCopy2 = [...toppings];

// take out items

// splice()
toppingsCopy.splice(3, 5);
console.log(toppingsCopy);

// indexOf()
const avoIndex = toppings.indexOf('Avocado');
console.log(avoIndex);
const wes = { name: 'wes' };
const people = [{ name: 'wes' }, wes];
console.log(people.indexOf(wes));
console.log(people.indexOf({ name: 'wes' }));

// includes()
const isInToppings = toppings.includes('Hot Sauce');
console.log(isInToppings);
// add it if it's not
if (!isInToppings) {
    toppings.push('Hot Sauce');
}
console.log(toppings);

// reverse()
// toppings.reverse();
const toppingsReversed = [...toppings].reverse();
console.log(toppingsReversed);
