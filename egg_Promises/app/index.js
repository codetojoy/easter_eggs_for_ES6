
"use strict";

import getPositiveInt from './utils.js';

console.log(`TRACER main cp BEGIN`);

// eg 1

let p1 = Promise.resolve(5150);

p1.then((res) => 
    console.log(`TRACER eg1 res: ${res}`)
);

// eg 2

let p2 = new Promise(
    function(resolve, reject) {
        setTimeout(() => resolve(4), 2000);
    }
);

p2.then((res) => {
    res += 5150;
    console.log(`TRACER eg2 res: ${res}`);
});

console.log(`TRACER main cp post-eg2`);

// eg 3

function makePromise() {
    return new Promise(function (resolve, reject) { 
        let randomNumSeconds = getPositiveInt(4);
        let delayInSeconds = 1000 * randomNumSeconds;
        let s = `TRACER eg3 make delay: ${delayInSeconds}`;
        console.log(s);
        let data = delayInSeconds;
        setTimeout(() => resolve(data), delayInSeconds);
    });
}

console.log(`TRACER main cp pre-eg3`);

makePromise()
    .then((res) => { 
        console.log(`TRACER eg3.1 RES ${res}`);
        return makePromise(); })
    .then((res) => { 
        console.log(`TRACER eg3.2 RES ${res}`);
        return makePromise(); }) 
    .then((res) => { 
        console.log(`TRACER eg3.3 RES ${res}`);
        return makePromise(); });

// eg 4

console.log(`TRACER main cp END`);
