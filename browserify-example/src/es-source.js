import add from 'ramda/es/add';
const name = (n) => 'hello' + n;

document.querySelector('#result')
        .textContent = '2 + 2 = ' + add(2, 2) + name('AJ');

