const ramda = require('ramda');

const name = (n) => 'hello' + n;

document.querySelector('#result')
        .textContent = '2 + 2 = ' + ramda.add(2, 2) + name('AJ');
