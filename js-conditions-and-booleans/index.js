const max = 10;

let number = math.random();

console.log("random number : ", number);

number *= max;
console.log("number complete : ", number);

number = math.floor(number);
console.log("number decimal : ", number);

// if (number > 2) {
//   number--;
// } else {
//   number++;
// }

// if (booleanValue) {
//   number--;
// } else {
//   number++;
// }

// Ternary Operator //

// condition ? value if true : Value if false //

number > 2 ? number-- : number++;

console.log("my number is : ", number);

const animal = "dog";
let emoji;

if (animal === "Tiger") {
  emoji = "tiger";
} else if (animal === "dog") {
  emoji = "dog";
} else if (animal === "elephant") {
  emoji = "elephant";
} else {
  emoji = "?";
}


switch (animal) {
    case 'tiger';
        emoji = 'tiger';
        break;
        case 'dog';
            emoji = 'dog';
            default: 
            emoji = '?';
            break;
}


