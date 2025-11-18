

function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    if (typeof value === "number") {
        return value * 10;
    }

    if (typeof value === "boolean") {
        return !value;
    }
    
}
 

function getLength(value: string | any[]): number{
    const expectedValue = value;
    if (typeof expectedValue === "string") {
        return expectedValue.length;
    }

    if (Array.isArray(expectedValue)) {
        return expectedValue.length;
    }
    return 0;
}
const lengthOfString = getLength("Hussain");
console.log(lengthOfString);

const lengthOfArray =  getLength([1,2,3,4]);



class Person {
    name: string;
    age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name};, Age: ${this.age}'`;
    }
    
}
const person1 = new Person('John Doe', 30);

const person2 = new Person('Alice', 25);




