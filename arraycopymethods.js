let arr = [1, 2, { a: 1, b: [1, 2, { ab: 32, cd: [3, 2, 1] }] }];

//the only way to deep copy using JSON
// let arr2 = JSON.parse(JSON.stringify(arr));

//other methods to shallow copy
// let arr2 = [...arr];
// let arr2 = arr.map(ele => ele);
// let arr2 = arr.forEach(ele => ele);
// let arr2 = arr.reduce((acc,val) => {
//   acc.push(val);

//   return acc;
// }, [])
// let arr2 = arr.filter(ele => true);
// let arr2 = arr.slice();
// let arr2 = arr.concat([]);
// let arr2 = Array.from(arr);
//for loop and while loop are also used for shallow copy

// console.log(arr2)

arr[2].b.push("xyz");
console.log(arr);
console.log(arr2);
