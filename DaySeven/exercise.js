//Level 1

//Question 1
function fullName() {
  let firstName = "Abraham";
  let lastName = "Bage";
  return `${firstName} ${lastName}`;
}
console.log(fullName());


//Question 2
function fullNames(fullName, lastName) {
  return `${fullName} ${lastName}`;
}
console.log(fullNames("Yetunde", "K"));


//Question 3
function addNumbers(num1, num2) {
  return (sum = num1 + num2);
}
console.log(addNumbers(2, 3));


//Question 4
function areaOfRectangle(length, width) {
  return (area = length * width);
}
console.log(areaOfRectangle(10, 10));

//Question 5
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(2, 2));


//Question 6
function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(3, 2, 3));


//Question 7
function areaOfCircle(r) {
  return (area = Math.PI * r * r);
}
console.log(areaOfCircle(3));


//Question 8
function circumOfCircle(r) {
  let circumference = 2 * (Math.PI * r);
  return circumference;
}
console.log(circumOfCircle(4));


//Question 9
function calcDensity(mass, volume) {
  let density = mass / volume;
  return density;
}

console.log(calcDensity(4, 2));


//Question 10
function calcSpeed(distance, time) {
  let speed = distance / time;
  return speed;
}
console.log(calcSpeed(5, 60));

//Question 11 (used arrow function)
const calcWeight = (mass, gravity) => mass * gravity;

console.log(calcWeight(5, 5));

//Question 12
function convertCelsiusToFahrenheit(temp) {
  return (fah = temp * (9 / 5) + 32);
}
console.log(convertCelsiusToFahrenheit(16));


//Question 13
function calcBmi(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal weight");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
  } else if (bmi >= 30) {
    console.log("Obese");
  }

  return bmi;
}
console.log(calcBmi(500, 2));


//Question 14
function checkSeason(month) {
   //Checks out the season according to the month number entered by user
    switch (month) {
        case 12:
        case 1:
        case 2: console.log("Winter"); 
        break;
        case 3:
        case 4:
        case 5: console.log("Spring"); 
        break;
        case 6:
        case 7:
        case 8: console.log("Summer"); 
        break;
        case 9:
        case 10:
        case 11: console.log("Autumn"); 
        break;
        default:
            console.log("Invalid month number"); 
            break;
    }
}

//Test case
let month = 7
    console.log("For month #" + month + ", the season is: ");
    checkSeason(month)


//Question 15
function findMax(a,b,c){
    //Find the largest number out of 3 numbers

    if ((a >= b) && (a >= c)){
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c
    }
}

//test case
console.log(findMax(0, -10, -2))


//Exercise Level 2
