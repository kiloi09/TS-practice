let arr1: number[] = [1,2,3]
// arr1.push('5')

let arr2: string[] = ['a', 'b', 'c']
// arr2.push(4)

let arr3: (string | number)[] = [...arr1, ...arr2]
console.log("🚀 ~ arr3:", arr3)


// ? Objects - Fundamentals

// ? In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties.


let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
car.brand = 'ford';
// car.color = 'blue';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };
// let car2: { brand: string; year: number } = { brand: 'audi' };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property



// ? - Create a new array of names.
// ? - Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// ? - Use this function to check if various names are in your array and log the results.


const names: string[] = ['John', 'Jane', 'Jim', 'Jill'];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

let nameToCheck: string = 'Jane';
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);


}

// ? OPTIONAL DEFAULT

function calculatePrice(price: number, discount?: number) {
    return price - (discount || 0);
  }
  
  let priceAfterDiscount = calculatePrice(100, 20);
  console.log(priceAfterDiscount); // Output: 80
  
  let priceWithoutDiscount = calculatePrice(300);
  console.log(priceWithoutDiscount); // Output: 300
  
  function calculateScore(initialScore: number, penaltyPoints: number = 0) {
    return initialScore - penaltyPoints;
  }
  
  let scoreAfterPenalty = calculateScore(100, 20);
  console.log(scoreAfterPenalty); // Output: 80
  
  let scoreWithoutPenalty = calculateScore(300);
  console.log(scoreWithoutPenalty); // Output: 300


// ? REST

function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);
  
    let total = numbers.reduce((previous, current) => {
      return previous + current;
    }, 0);
    return `${message} ${total}`;
  }
  
let result = sum('The total is:', 1, 2, 3, 4, 5); // result will be "The total is: 15"

//? UNION IN PARAMS

const processInput = (val: string | number): string | number => {
    if (typeof val === 'string') {
        return val.toUpperCase()
    }else if(typeof val === 'number') {
        return val * 2
    }else {
        return val
    }
}



// ? OBJECT INSIDE FUNCTION AND EXCESS PROPERTY CHECK

function createStudent(student: { id: number; name: string }) {
    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
  }
  
  const newStudent = {
    id: 5,
    name: 'anna',
    email: 'anna@gmail.com',
  };
  
  createStudent(newStudent);
//   createStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' }); //this will be error because inline


// ? TYPE ALIAS - BLUEPRINT

type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = 'hello'; // This is valid
value = 123; // This is also valid

type Theme = 'light' | 'dark'; // Type alias for theme

let theme: Theme;
theme = 'light'; // This is valid
theme = 'dark'; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark'); // This will set the theme to 'dark'


type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(bob);


// ? INTERFACE - METHOD ------------------------------------------------------------------------------------

interface Book {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    // method
    printAuthor(): void;
    printTitle(message: string): string;
  }
  
  const deepWork: Book = {
    isbn: 9781455586691,
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
    printAuthor() {
      console.log(this.author);
    },
    printTitle(message) {
      return `${this.title} ${message}`;
    },
  };
  deepWork.printAuthor();
  const resultBook = deepWork.printTitle('is an awesome book');
  console.log(resultBook);


  // ? MERGING --------------------------------------------------------------------------------------------
  
  interface Person {
    name: string;
    getDetails(): string;
  }
  
  interface DogOwner {
    dogName: string;
    getDogDetails(): string;
  }
  
  // Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.
  
  // Merging the interface
  interface Person {
    age: number;
  }
  
  // Usage
  const person: Person = {
    name: 'John',
    age: 30,
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    },
  };
  
  // Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.
  
  // Extending the interface
  interface Employee1 extends Person {
    employeeId: number;
  }
  
  const employee: Employee1 = {
    name: 'jane',
    age: 28,
    employeeId: 123,
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    },
  };
  
  // Interface multiple inheritance
  interface Manager1 extends Person, DogOwner {
    managePeople(): void;
  }
  
  const manager: Manager1 = {
    name: 'Bob',
    age: 35,
    dogName: 'Rex',
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    },
    getDogDetails() {
      return `Dog Name: ${this.dogName}`;
    },
    managePeople() {
      console.log('Managing people...');
    },
  };