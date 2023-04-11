interface CustomerInterface {
    name: string;
    age?: number;
}

const customer = {
    name: 'John Doe',
    age: 15
}

const customer2 = {
    name: 'Jane Doe',
}

customer.age = 20;

console.table(customer);

// function printData({ name, age }: { name: string, age: number}) {
//     console.log(name, age);
// }

function printData({ name, age }: CustomerInterface) {
    console.log(name, age);
}

printData(customer);
printData(customer2);
