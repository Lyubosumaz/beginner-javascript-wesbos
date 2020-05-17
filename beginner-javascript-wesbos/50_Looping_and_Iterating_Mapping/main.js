const faces = ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊',];

function addArms(face) {
    return `☝ ${face} ☝`;
}

const toys = faces.map(addArms);

console.table(toys);

function bosify(name) {
    return `${name} Bos`;
}

function capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const fullNames = ['wes', 'kait', 'poppy']
    .map(capitalize)
    .map(bosify);
console.log(fullNames);

const orderTotals = [66, 10000, 342, 1002, 3, 523, 34, 634, 2, 854, 1644, 2222];

const orderTotalsWithTax = orderTotals.map(total => total * 1.13);
console.log(orderTotalsWithTax);

const people = [
    { birthday: 'April 22, 1993', names: { first: 'Kaith', last: 'Buckley' } },
    { birthday: 'Januaty 3, 1975', names: { first: 'Larry', last: 'Heep' } },
    { birthday: 'February 12, 1944', names: { first: 'Linda', last: 'Bermeer' } },
];

//don't update DOM in map() use instead forEach()
const cleenPeople = people.map(function (people) {
    // timestamp
    const birthday = new Date(people.birthday).getTime();
    // now timestamp
    const now = new Date();
    const age = Math.floor((now - birthday) / 31536000000);
    // get their birthday
    // figure out how old they are
    // return their full name and bday in an object
    return {
        age: age,
        name: `${people.names.first} ${people.names.last}`,
    }
});

console.table(cleenPeople);
