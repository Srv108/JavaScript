const items = [
    { name: 'Apple', type: 'fruit' },
    { name: 'Monitor', type: 'electronic' },
    { name: 'Orange', type: 'fruit' }
];
const fruitNames = items.filter(item => item.type === 'fruit').map(item => item.name);
//   { name: 'Apple', type: 'fruit' },
//   { name: 'Orange', type: 'fruit' }
// ans => [apple,orange]
console.log(fruitNames);