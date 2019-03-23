const assert = require('assert').strict

function add(a,b){
    return a + b;
}


assert.strictEqual(add(5,8), 11);