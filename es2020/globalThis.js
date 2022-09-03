const canFetch = typeof globalThis.fetch === 'function';
console.log(canFetch); //true ->  Web Browsers, nodejs -> false

// console.log(globalThis); //Web Browsers or nodejs

// console.log(this); //Web Browsers
// console.log(frames) //Web Browsers
// console.log(self) //Web Workers
//console.log(global) //nodejs

console.log(globalThis === window) //true -> Web Browsers, error -> nodejs
