1. 
let num = 0;

function checkNumber(num){
  if(num < 0){
    console.log("უარყოფითია")
  } else if(num > 0){
    console.log("დადებითია")
  } else{
    console.log("0 არც დადებითია არც უარყოფითი :D")
    
  }
}
checkNumber(    0)

2. 

const sumNumbers= () =>{
  let x = 0;
for(let i = 1; i< 100; i++){
    x = x + i;
}
console.log(x)
}
sumNumbers()


3. 
let checkNum = (numb) => {
  if(numb % 2 === 0){
    console.log("this number is even!")
  } else{
    console.log("this number is odd!")
  }
}


checkNum(3)


4. 
const car = {
  year: 1995,
  model: "Toyota",
};

function calculateAge(car) {
  const currentYear = new Date().getFullYear();
  const carAge = currentYear - car.year;
  return carAge;
}

const carAge = calculateAge(car);
console.log(carAge);

// function findCarYear(carObject) {
//   return carObject && carObject.year ? carObject.year : "Car year not found";
// }

// const car = {
//   year: 2023,
//   model: "Toyota",
// };

// const carYear = findCarYear(car);
// console.log(carYear);

5.


function findMax(arr) {
  if (arr.length === 0) {
    return undefined; 
  }
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]; 
    }
}

return max;
}

const numbers = [1, 4, 88, 99,123];
const maxNumber = findMax(numbers);
console.log(maxNumber);


6.
function findMin(arr) {
  if (arr.length === 0) {
    return undefined; 
  }
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]; 
    }
}

return min;
}

const numbers1 = [1, 4, 88, 99,123];
const minNumber = findMin(numbers);
console.log(minNumber);





7.
 function reverse(str){
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--){
     reversedString = reversedString + str[i];
}
return reversedString;
}

console.log(reverse('hello'));


    
 

