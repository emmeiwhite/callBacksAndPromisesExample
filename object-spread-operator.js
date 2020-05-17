//  ... Object spread operator "Three dots"
const animals = {
  monkey: 3,
  tiger: 5,
  parrot: 8,
  elephant: 1,
  cat: 3
}

// ES9-Feature --- ECMAScript 2018 feature

const { monkey, tiger, ...rest } = animals; // ... three dots used as the rest operator 

console.log(rest); // {parrot:8,elephant:1,cat:3}


/** --- lets make use of spread operator in function call */

const getAnimals = (a1, a2, a3, a4, a5) => {
  console.log("Animals passed are :");
  console.log(a1);
  console.log(a2);
  console.log(a3);
}

getAnimals(monkey, tiger, rest); // This is making use of the spread operator, we are spreading our object elements :)
