const {fromJS, is, merge, isImmutable} = require("immutable");

const a = {
    name: "hejiamin",
    age: 12,
    persons: [{name: 'fjd'}]
}

const b = fromJS(a);
const c = fromJS(a);

// console.log(b)
console.log(is(b,c))
console.log(b===c)

const m = fromJS({ x: 123, y: 456 });
const n = fromJS({ y: 789, z: 'abc' });
const z = merge( m, n);
console.log(z.toJS())
console.log(isImmutable(z))


console.log(merge(fromJS([1,2,3]),[4,5,6]).toJS())

