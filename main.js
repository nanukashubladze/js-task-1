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
checkNumber(0)

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
function findCarYear(carObject) {
  return carObject && carObject.year ? carObject.year : "Car year not found";
}

const car = {
  year: 2023,
  model: "Toyota",
};

const carYear = findCarYear(car);
console.log(carYear);

5.

// const arr = [1, 4, 88, 99,123];
//   const max = Math.max(...arr);

// console.log(max);
function findMax(arr) {
  if (arr.length === 0) {
    return undefined; 
  }

  return Math.max(...arr);
}

const numbers = [1, 4, 88, 99,123];
const maxNumber = findMax(numbers);
console.log("Maximum number:", maxNumber);


6.
const arr2 = [1, 4, 88, 99,123];
  const min = Math.min(...arr2);

console.log(min);





7.
 function reverse(str){
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--){
     reversedString = reversedString + str[i];
}
return reversedString;
}

console.log(reverse('hello'));


    
 

