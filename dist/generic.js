"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'serj' }, { age: '99' });
const merged2 = mergeObjects({ name: 'Lada' }, { age: '92' });
function withCount(value) {
    return {
        value,
        count: `В этом обьекте ${value.length} символов`
    };
}
//# sourceMappingURL=generic.js.map