# TypeScript Basics: Types and Variables

TypeScript is a **superset of JavaScript** that introduces **static typing**. This helps catch errors during development by specifying what kind of data a variable can hold.

---

## Variable Declarations

TypeScript supports the same variable declarations as JavaScript:

- `let`: Block-scoped, reassignable.
- `const`: Block-scoped, **not** reassignable.
- `var`: Function-scoped, avoid in modern code.

```ts
let name: string = "Yash";
const age: number = 24;
var isOnline: boolean = true;
```

## Basic Types:

### 1. string
Used for textual data.

```
let username: string = "Yash";
```
### 2. number
All numeric values (integers, floats, etc.).

```
let score: number = 99.5;
```

### 3. boolean
Represents true or false.

```
let isLoggedIn: boolean = false;
```

### 4. any 
Disables type checking. Use only when necessary.

```
let data: any = "Hello";
data = 123; // No error
```

### 5. unknown
Safer alternative to any. Requires type checking before use.

```
let input: unknown = "Test";
```

### 6. null and undefined
Special types with only the values null and undefined.

```
let n: null = null;
let u: undefined = undefined;
```

### 7. array
An ordered list of values of the same type.

```
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];
```
Alternate syntax:

```
let values: Array<string> = ["x", "y"];

```
### 8. tuple
A fixed-length array with specific types.

```
let person: [string, number] = ["Yash", 24];
```

### 9. enum
Defines a set of named constants.

```
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let move: Direction = Direction.Up;
```

### 10. object
Defines a structured type with keys and values.

```
let user: { name: string; age: number } = {
  name: "Yash",
  age: 24
};
```

### 11. union types
Allows a variable to hold multiple types.

```
let id: string | number;
id = "123";
id = 456;
```

### 12. literal types
Specifies exact values a variable can hold.

```
let status: "success" | "error" = "success";
```

## Type Inference

TypeScript can automatically detect the type if not explicitly declared.

```
let city = "Delhi"; // Inferred as string
```

### Best Practices

- Use const when a variable doesn’t change.

- Prefer specific types over any.

- Use union types and interfaces for more flexibility.

- Always type function parameters and return values.


