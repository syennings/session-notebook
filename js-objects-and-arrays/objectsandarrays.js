const cohort = {
  name: "lime",
  amountOfStudents: 10,
  school: { name: "spiced", address: "ritterstrasse ", house: 12 },
  studentsName: ["victor", "Scott", "kaya"],
  "Favourite movies": ["holiday", "sister keepers", "harry potter"],
};

// access an array in an object

console.log("array item in an object:", cohort.studentsName[1]);

// add a name in my array

cohort.studentsName.push("Ron");

console.log("add item in an array", cohort);

// access an object in an object

cohort.log("address", cohort.school.address);

//second in favurite movie
console.log("movies", cohort["favourite movies"][1]);

//access an item in an object
console.log("movies", ["last movie"][cohort["favourite movies"].length - 1]);
