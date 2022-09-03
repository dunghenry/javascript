function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next()); //{value: 1, done: false}
console.log(g.return("oke")); //{value: 'oke', done: true}
console.log(g.next()); //{value: undefined, done: true}