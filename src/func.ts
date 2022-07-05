function decrement(num: number) {
  return num - 1;
}

function getFirst(items: number[]) {
  if (typeof items[0] === "number") {
    return items[0];
  }
  return null;
}

console.log(getFirst([1, 2, 3]));

const increment2 = function (n: number): number {
  return n + 1;
};
const getZero = function () {
  return 0;
};
const num = getZero();

const factrial = function fact(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * fact(n - 1);
};
console.log(factrial(10));

const increment3 = (n: number) => n + 1;

type Increment = (num: number) => number;
const increment4: Increment = (num: number): number => num + 1;
const increment5: Increment = function (num: number): number {
  return num + 1;
};

hello();
function hello() {
  console.log("Hello world");
}

// Block-scoped variable 'hello2' used before its declaration.
// hello2();
// const hello2 = function () {
//   console.log("Hello world");
// };

const oneSecond = 1000;
const timer = {
  message: "It's time!",
  start: function () {
    console.log(this);
    setTimeout(function () {
      console.log(this.message);
    }, oneSecond);
    setTimeout(() => {
      console.log(this.message);
    }, oneSecond);
  },
};
timer.start();

const foo = (...args) => {
  console.log(args);
};
foo(1, 2, 3);

const nums = [1, 2, 3, 4];
const even = nums.filter((n) => n % 2 === 0);
console.log(even);

function myPrint(message: string): void {
  console.log(message);
}

function myPprint(message: string): undefined {
  console.log(message);
  return undefined;
}

function getIfExists(numbers: number[], search: number): number | undefined {
  if (numbers.includes(search)) {
    return search;
  }
  return undefined;
}

// reference
const x = { n: 1 };
const y = x;
y.n = 2;
console.log(x);

let z = x;
z = { n: 3 };
z.n = 4;
console.log(x);

// optional parameter
function hello3(person?: string) {}
hello3();
hello3("alice");

// default parameter
function hoge(x = 1) {
  console.log(x);
}
hoge();
hoge(undefined);

// rest parameter
console.log(Math.max(1, 10, 100));
const scores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Argument of type 'number[]' is not assignable to parameter of type 'number'.
//const highest = Math.max(scores);
const highest = Math.max(...scores);
console.log(highest);

// this parameter
class Male {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public toString(): string {
    return `Monsieur ${this.name}`;
  }
}
class Female {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public toString(this: Female): string {
    return `Madame ${this.name}`;
  }
}

const male: Male = new Male("Taro");
const female: Female = new Female("Hanako");
console.log(male.toString());
console.log(female.toString());

const maleToStr: () => string = male.toString;
const femaleToStr: (this: Female) => string = female.toString;
maleToStr();
// The 'this' context of type 'void' is not assignable to method's 'this' of type 'Female'.
//femaleToStr();

// destructuring assignment parameter
function foo2({ a, b }: { a: number; b: number }) {}
function bar([num1]: number[]) {}
