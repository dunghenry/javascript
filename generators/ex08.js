function* pseudoRandom(seed) {
  let previous = seed;
  while (true) {
    let next = (previous * 16807) % 2147483647;
    yield next;
    previous = next;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
