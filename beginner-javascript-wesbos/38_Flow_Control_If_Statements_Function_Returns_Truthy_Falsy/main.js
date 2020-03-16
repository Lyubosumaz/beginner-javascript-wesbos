if (10 > 2) {
    console.log('Yep 1');
} else if (11 > 10) {
    console.log('Yep 2');
}

if (3 > 1) {
    console.log('Yep 3');
} else {
    console.log('Yep 4');
}

function slugify(sentence, lowercase) {
    let slug = sentence.replace(/\s/g, '-');
    if (lowercase) {
        slug = slug.toLowerCase();
    }
    return slug;
}

const name = 'wes';
if (name === 'wes' || name === 'scott') {
    console.log('Cool Name!');
}


const name2 = 'wes';
const last = 'bos';
if (name2 === 'wes' && last === 'bos') {
    console.log('Cool Name2!');
}

if ('awesome'.includes(name)) {
    console.log('super cool awesome name');
}

function nameIsAwesome(name) {
    return 'awesome'.includes(name);
}

if (nameIsAwesome('wes')) {
    console.log('Cool name wes');
}

const dog = '';
if (dog) {
    console.log('you have a dog');
} else {
    console.log('you don\'t have a dog');
}

const score = 0;
if (score) {
    console.log('there is a score already');
} else {
    console.log('no score yet');
}

const values = [[], {}, -10, 1, 0, '', 'string', ' ', undefined, NaN, null];
console.group('truth or falsy values');
values.forEach(value => {
    if (value) {
        console.log(value, 'is truthy');
    } else {
        console.log(value, 'is falsy');
    }
});