function foo(a: string, b: number): void {
    console.log(a, b);
}

foo("Hello", 5);


// Arrow functions
const bar = (a: string, b: number) => {
    console.log(a);
    console.log(b);
}

bar("hello", 5);


// Optional argument
// function fooBar(name: string, age?: number) {
//     console.log(name, age);
// }


// Default argument
// function fooBar(name: string, age: number = 0) {
//     console.log(name, age);
// }


// Nullish coalescing operator
function fooBar(name: string, age: number = 0) {
    console.log(name, age ?? '');
}

fooBar("John");
