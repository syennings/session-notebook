//empty object
const emptyObject = {};
console.log("emptyObject", emptyObject);

//object

const cohort = {
  name: "lime",
  amountOfStudents: 10,
  "school name": "spiced",
};

//log the whole object
console.log("cohort", cohort);

//log the name with dot notation, dot and the key name

console.log("cohort Name:", cohort.name);

//log the amount of students with bracket notation
console.log("cohort amount of students:", cohort["amountOfStudents"]);

// when we have a keu name that has spaces, we need to use the brackets notation
console.log("school name:", cohort["school name"]);

// add a new keu and its value

cohort["knowJs"] = true;
cohort.song = "are you ready";

//log the whole object

console.log("cohort after adding:", cohort);

//delete a key

delete cohort.knowJs;
console.log("cohort after deleting:", cohort);
