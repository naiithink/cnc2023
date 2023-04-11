const arr: number[] = [2, 6, 3];

for (const num in arr) {
    console.log(num);
}

console.log(arr);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.push(5);

console.log(arr);

arr.pop();

console.log(arr);

console.log(arr.slice(0, 2));

console.log(arr.splice(1, 1));

// const printElement = (data: number) => {
//     console.log(data);
// }


// arr.forEach(printElement);

// arr.forEach((data: number, index: number, arr: number[]) => {
//     console.log(index, data, arr);
// })


// const mappedArr = arr.map((data: number) => {
//     return data * 2;
// })

// console.log(mappedArr);


// const arr1: number[] = [1, 2, 3];
// const arr2: number[] = [4, 5, 6];

// const arr3: number[] = [...arr1, ...arr2];

// console.log(arr3);

// console.log(Math.max(...arr3));


// Array destructor
const position: [number, number] = [5, 19];

const printPosition = ([x, y]: [number, number]) => {
    // let x = position[0];
    // let y = position[1];

    console.log(x, y);
}

printPosition(position);
