const names = ['wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'wes', 'kait', 'snickers', 'last one!'];
console.log(Array.isArray(names));
console.log(names[1]);
console.log(names.length);
console.log(names[2]);
console.log(names[names.length - 1]);

// Mutation Method - DO CHANGE THE ORIGINAL DATA
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// copy the array
const newNumbersReverse = [...numbers].reverse();
console.log(newNumbersReverse, 'newNumbersReverse');
//
const numbersBackwards = numbers.reverse();
console.log(numbers);

// Immutable - THEY DO NOT CHANGE THE ORIGINAL DATA
const pizzaSlice = names.slice(2, 4);
console.log(pizzaSlice);
console.log(numbers);

//
const names2 = ['wes', 'kait', 'snickers'];
names2.push('lux');
// update state
const names3 = ['wes', 'kait', 'snickers'];
names4 = [...names3, 'lax'];
names2.unshift('poppy');
console.log(names2);
const name5 = ['poppy', ...names3];
console.log(name5);

// slice doesn't mutate the original
// splice mutate the original
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(names2);
numbers2.splice(3, 2);
console.log(names2);

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [
    ...bikes.slice(0, 2),
    'benotto',
    ...bikes.slice(2),
];
console.log(newBikes);

const newBikes2 = [
    ...newBikes.slice(0, 3),
    ...newBikes.slice(4)
];
console.log(newBikes2);

//
const comments = [
    { test: 'Cool Beans', id: 123 },
    { test: 'Love this', id: 133 },
    { test: 'Neato', id: 233 },
    { test: 'good bikes', id: 333 },
    { test: 'so good', id: 433 },
];

function deleteComment(id, comments) {
    // first find the index of the item in the array
    const commentIndex = comments.findIndex(comment => comment.id === id);
    // make and return new array without that item in it
    return [
        ...comments.slice(0, commentIndex),
        ...comments.slice(commentIndex + 1)
    ];
}
const removedComment = deleteComment(123, comments);
console.log(removedComment);
console.log(comments);

// const kaitIndex = names2.findIndex(name => {
//     if (name === 'kait') {
//         return true;
//     } else {
//         return false;
//     }
// });
const kaitIndex = names2.findIndex(name => name === 'kait');
console.log(kaitIndex);
console.log(names2[kaitIndex]);

// const newNamesWithoutKait = [
//     ...names2.slice(0, kaitIndex),
//     ...names2.slice(kaitIndex + 1)
// ];
const newNamesWithoutKait = [
    names2.slice(0, kaitIndex),
    names2.slice(kaitIndex + 1)
];
console.log(newNamesWithoutKait);
const newName999 = newNamesWithoutKait.flat();
console.log(newName999, 'flat');