'use strict';
const str = '      qwertyuiopasdfghjklzxcvbnmqwertyuuipasd    ';
const num = 44;

const func = function (a) {
    if ((typeof a) == 'string') {
        let b = 30;
        a = a.replace(/^ +| +$/g, '');
        return a.substring(0, b) + '...';
    } else {
        return 'Аргумент функции не строка';
    }
};

console.log(func(str));
console.log(func(num));