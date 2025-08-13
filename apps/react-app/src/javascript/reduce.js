const users = [
  { firstname: "sanjay", lastname: "ramabuddi", age: 20 },
  { firstname: "sanjay", lastname: "ram", age: 15 },
  { firstname: "sanjay", lastname: "ramabu", age: 20 },
  { firstname: "sanjay", lastname: "ramabuddiiiii", age: 30 },
];

const output = users.reduce((acc, curr) => {
  if (curr.age > 20) {
    acc.push(curr.firstname + " " + curr.lastname);
  } else {
    return acc;
  }
  return acc;
}, []);

console.log(output);

const output2 = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output2);
