

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
    return('Unsupported type');
}
 

function getLength(value: string | any[]): number{
    const expectedValue = value;
    if (typeof expectedValue === "string") {
        return expectedValue.length;
    }

    else if (Array.isArray(expectedValue)) {
        return expectedValue.length;
    }
    else return 0;
}
const lengthOfString = getLength("");

const lengthOfArray =  getLength([]);



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

type eachBook = {
  title: string;
  rating: number;
}

function filterByRating(books: eachBook[]): eachBook[] {
  return books.filter(book => book.rating >= 4);
}


type user = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: user[]): user[] {
  
  return users.filter(user => user.isActive === true);
}

filterActiveUsers([]);


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;

}
function printBookDetails(bookDetails: Book): void{
     const availability = bookDetails.isAvailable ? "Yes" : "No";
     console.log(
        `Title: ${bookDetails.title}, Author: ${bookDetails.author}, Published: ${bookDetails.publishedYear}, Available: ${availability}`

     );
     
}


function getUniqueValues(arr1: (string | number) [], arr2: (string | number) []): (string | number)[]{
    const result: (string | number) [] = [];

    for (let i = 0; i <arr1.length; i++) {
        if (!result.includes(arr1[i])){
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++){
        if (!result.includes(arr2[i])){
            result.push(arr2[i]);
        }
    }
    return result
    
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    let price = product.price * product.quantity;

    if (product.discount !== undefined) {
      price -= (price * product.discount) / 100;
    }

    return total + price;
  }, 0);
}

const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products)); 