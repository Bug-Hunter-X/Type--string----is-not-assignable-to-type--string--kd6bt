function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

//Solution 1: Iterate through the array
user.forEach(person => console.log(greeter(person)));

//Solution 2: Use a different function signature
function greeter2(people: string[]): string {
    return people.map(person => `Hello, ${person}`).join('\n');
}
console.log(greeter2(user));