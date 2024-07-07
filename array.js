const array = [1,2,3,5];

console.log(array);

array[1] = 23;

console.log(array);

const array2 = [1, 4, {name: 'first', work: 'something'}, [3, 5, 8]];

console.log(array2);

console.log(array2[2]['work'])

array.push(10);

console.log(array)

array.splice(0, 1);

console.log(array);