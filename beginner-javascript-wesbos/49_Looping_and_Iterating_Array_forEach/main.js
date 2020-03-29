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

const orderTotals = [66, 10000, 342, 1002, 3, 523, 34, 634, 2, 854, 1644, 2222];

const feedback = [
    { comment: 'Love the burgs', rating: 4 },
    { comment: 'Horrible Service', rating: 2 },
    { comment: 'Smoothies are great, liked the burger too', rating: 5 },
    { comment: 'Ambiance needs work', rating: 3 },
    { comment: 'I DON\'T LIKE BURGERS', rating: 1 },
];

const students = [
    { id: '11ce', first_name: 'Dall', last_name: 'Puckring' },
    { id: '2958', first_name: 'Margarete', last_name: 'Brandi' },
    { id: '565a', first_name: 'Bendicty', last_name: 'Woodage' },
    { id: '3a16', first_name: 'Micki', last_name: 'Mattes' },
    { id: 'f396', first_name: 'Flory', last_name: 'Gladeche' },
    { id: 'de5f', first_name: 'Jamill', last_name: 'Emilien' },
    { id: '54cb', first_name: 'Brett', last_name: 'Aizikowitz' },
    { id: '9135', first_name: 'Lorry', last_name: 'Smallman' },
    { id: '978f', first_name: 'Gilly', last_name: 'Flott' },
];

function logTopping(topping, index, originalArray) {
    const prevTopping = originalArray[index - 1];
    const nextTopping = originalArray[index + 1];
    //log the topping
    console.log(topping);
    // log the previous topping if there is one
    prevTopping ? console.log(prevTopping) : null;
    // log the next topping if there is one
    nextTopping ? console.log(nextTopping) : null;
    // if (nextTopping) {
    //     console.log(originalArray[index + 1]);
    // }

    // if its the last item in the array, say good bye
    index === originalArray.length - 1
        ? console.log('Goodbye')
        : console.log('Getting the next Topping');

    index === originalArray.length - 1 && console.log('Goodbye'); // :)
    console.log('------------------------');
}

toppings.forEach(logTopping);

// toppings.forEach(topping => {
//     console.log(topping)
// });
