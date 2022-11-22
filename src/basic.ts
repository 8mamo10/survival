let message = "Hello World!";
message.toLowerCase();
//message();

const user = {
  name: "Daniel",
  age: 26,
};
//user.location;
console.log("Hello world!");

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", new Date());

const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
  console.log(s.toUpperCase());
});
