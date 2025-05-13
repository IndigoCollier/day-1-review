# JavaScript Fundamentals Review

## 🔹 let vs const and Scope
- `let` and `const` are block-scoped.
- Use `const` when the variable shouldn’t change.

```js
const name = "Jason";
let age = 25;
```

## 🔹 Functions (Declaration vs Expression)
```js
// Function Declaration
function greet() {
  return "Hello!";
}

// Function Expression
const greet = function() {
  return "Hello!";
};
```

## 🔹 Arrays & Objects
```js
const colors = ["red", "blue"];
const person = { name: "Alex", age: 30 };
```

## 🔹 Loops: for, forEach, map
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

colors.forEach(color => console.log(color));

const caps = colors.map(color => color.toUpperCase());
```

## 🔹 Conditionals
```js
const age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

const message = age >= 18 ? "Adult" : "Minor";
```