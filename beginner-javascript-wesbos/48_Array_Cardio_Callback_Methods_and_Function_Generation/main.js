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

// utils

const utils = {
    findBurgRatting: function (singleFeedback) {
        return singleFeedback.comment.includes('burg')
    },
    findByWord: function (word) {
        return function (singleFeedback) {
            return singleFeedback.comment.includes(word);
        }
    }
};

// callback methods

// function findBurgRatting(singleFeedback) {
//     if (singleFeedback.comment.includes('burg')) {
//         console.log(singleFeedback);
//         return true;
//     } else {
//         return false;
//     }
// }

// const findBurgRatting = function findBurgRatting(singleFeedback) {
//     return singleFeedback.comment.includes('burg')
// }

// const findBurgRatting = (singleFeedback) => singleFeedback.comment.includes('burg');
// const findSmootieRatting = (singleFeedback) => singleFeedback.comment.includes('Smoothie');

function findByWord(word) {
    return function (singleFeedback) {
        return singleFeedback.comment.includes(word);
    }
}

// find()
// const burgRating = feedback.find(findSmootieRatting);
const burgRating = feedback.find(findByWord('Smoothie'));
console.log(burgRating);

// filter()

// const goodReviews = feedback.filter(singleFeedback => {
//     if (singleFeedback.rating > 2) {
//         return true;
//     } else {
//         return false;
//     }
// });

function filterByMinRating(minRating) {
    return function (singleFeedback) {
        return singleFeedback.rating > minRating;
    };
}

const goodReviews = feedback.filter(filterByMinRating(3));
console.table(goodReviews);

// const burgRating2 = feedback.filter(singleFeedback => singleFeedback.comment.includes('burg'));
const burgRating2 = feedback.filter(utils.findByWord('burg'));
console.table(burgRating2);

// remove the one star rating
const legitRating = feedback.filter(single => single.rating !== 1);
console.table(legitRating);

// check if there is at least 5 of one type of meat with some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(meatValue => meatValue >= 5);
console.log(isThereEnoughOfAtLeastOneMeat);

// make sure we have at least 3 of every meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).every(meatValue => meatValue >= 3);
console.log(isThereEnoughOfEveryMeat);

// sort()
const numbers = [1, 401, 2, 100, 3, 200, 400, 155];
console.log(numbers.sort());

// const numbersSorted = numbers.sort(function (firstItem, secondItem) {
//     return firstItem - secondItem;
// });

const numbersSorted = numbers.sort((firstItem, secondItem) => firstItem - secondItem);
console.log(numbersSorted);

console.log(toppings.sort());
console.log(orderTotals.sort((a, b) => a - b));

const productsSortedByName = Object.entries(prices).sort(function (a, b) {
    const aPrice = a[1];
    const bPrice = b[1];
    return aPrice - bPrice;
});
console.log(productsSortedByName);
console.log(Object.fromEntries(productsSortedByName));
