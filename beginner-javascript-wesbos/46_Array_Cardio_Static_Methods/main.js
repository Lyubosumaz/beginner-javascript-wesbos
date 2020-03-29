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

// Array.of();
Array.of('wes', 'keit');

// Array.from();
function createRange(start, end) {
    const range = Array.from({ length: end - start + 1 },
        function (item, index) {
            return index + start;
        });
    return range
}
const myRange = createRange(3, 7);
console.log(myRange);

// Array.isArray();
console.log(Array.isArray(myRange));

// Object.entries(), Object.key(), Object.values()
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.values(meats).forEach(qty => console.log(qty));
Object.keys(meats).forEach(meat => console.log(meat));
Object.entries(meats).forEach(entry => {
    const key = entry[0];
    const value = entry[1];
    console.log(key, value);
});

Object.entries(meats).forEach((key, value) => {
    console.log(key, value), '<>';
});