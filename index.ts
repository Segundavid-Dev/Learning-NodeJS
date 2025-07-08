interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark: () => void;
}

// We can also extend types in Typescript
type Insect = {
  name: string;
};

type Spider = Insect & {
  hasHoney: boolean;
};

const spider: Spider = {
  name: "wakapow",
  hasHoney: false,
};

// Strings -> stores textual data
const x: string = "x";
const y: string = "y";

// strings can span multiple lines

let sentence: string = `xxx
xxx
`;

// Boolean  -> type stores either a binary value either true or false
const isReady: boolean = true;

// Number in typescript

const decimal: number = 10;
const hexadecimal: number = 0x00d;
const binary: number = 0b1010;

// symbols

type Obj = {
  sym: symbol;
};

// Arrays
const myArray: string[] = ["mango", "apple", "banana", "ice-cream"];
const secondArray: Array<string> = ["bread", "pastries", "rice"];
// union types in arrays
const unionArrays: Array<string | number> = [1, "a", 2, "3"];
const secondUnionArrays: (string | number)[] = ["hello", 1, 2, "typescript", 3];

// Type Annotations

// Optional Properties
// An object can specify properties by adding a question mark ? to the property name

type X = {
  a: number;
  b?: number; //optional
};

const add = ({ a, b }: X) => a + b;

// Index signatures
type K = {
  [name: string | number]: string;
};

enum Colors {
  red = "#ff0000",
  Green = "#00ff00",
  blue = "#0000ff",
}
