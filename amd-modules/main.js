define(['./arith'], function (arith) {
  'use strict';
  document.querySelector('#result')
          .textContent = '2 + 2 = ' + arith.add(2, 2);
});
