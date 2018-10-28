const arith = require('./cjs/arith.js');

document.querySelector('#result')
        .textContent = '2 + 2 = ' + arith.add(2, 2);
