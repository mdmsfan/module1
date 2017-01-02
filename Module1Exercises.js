// Write a function called "getLargestNumberAmongMixedElements". 

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// Notes:
// * The array might contain values of a type other than numbers.
// * If the array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

function getLargestNumberAmongMixedElements(arr) {
  // your code here
  //var largestNumber = arrNums[0]; 
  var arrNums = []
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number"){
      arrNums.push(arr[i]); 
    }
  }
  var largestNumber = arrNums[0]; 
  if (arr.length === 0) { //check if array is empty
      return 0; 
  }
  else if (arrNums.length === 0) {
    return 0; //check if arrayNums is empty
  }
  else {
      arrNums.forEach(function(element){
          if (element > largestNumber){
              largestNumber = element; 
          }
      });
      return largestNumber
  //create new array consisting of numbers
  //if such an array is empty return 0 
  }
}
var output = getLargestNumberAmongMixedElements(["name", -4, -1, -11]);
//console.log(output);

//recursive multiply
function multiply(num1, num2) {
  // your code here
  if (num2 === 0) {
      return 0; 
  }
  if (num2 < 0) {
      return num1 + multiply(num1, num2 + 1); 
  }
  return num1 + multiply(num1, num2 - 1); 
}
var output = multiply(-5, -6);
//console.log(output);


// Write a function called "getEvenLengthWordsAtProperty".

// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// var obj = {
//   key: ['a', 'long', 'game']
// };
// var output = getEvenLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['long', 'game']

function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  var property = obj[key];
  var evenWords = []; 
  if (!property) {
      return []; 
  }
  else if (!Array.isArray(property)) {
      return []; 
  }
  else if (property.length === 0) {
      return property; 
  }
  for (var i = 0; i < property.length; i++) {
          if (property[i].length % 2 === 0) {
              evenWords.push(property[i]); 
          }
  }
  return evenWords; 
}

var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
//console.log(output); // --> ['long', 'game']

// Write a function called "getEvenElementsAtProperty".

// Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no even elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

function getEvenElementsAtProperty(obj, key) {
  // your code here
  var property = obj[key]; 
  var evenElements = []; 
  if (!property){
      return []; 
  }
  else if (property.length === 0){
      return []; 
  }
  else if (!Array.isArray(property)) {
      return []; 
  }
  for (var i = 0; i < property.length; i++) {
      if (property[i] % 2 === 0) {
          evenElements.push(property[i]); 
      } 
  }
  if (evenElements.length === 0) {
      return []; 
  }
  else {
      return evenElements; 
  }
}
var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
//console.log(output);

function getElementOfArrayProperty(obj, key, index) {
  // your code here
  var property = obj[key]; 
  //console.log(property); 
  if (!property) {
      return undefined;
  }
  else if (property.length === 0) {
      return undefined; 
  }
  else if (!Array.isArray(property)) {
      return undefined; 
  }
  else if (property[index] === "undefined") {
      return undefined; 
  }
    return property[index]; 
}
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0); 
//console.log(output); // --> 'Jamil'

function multiply(num1, num2) {
  // your code here
 var total = 0; 
if (num1 > 0 && num2 > 0) {
    for (; num2 > 0; num2 = num2 - 1) {
        total = total + num1; 
    }
    return total; 
  }
else if (num1 === 0 || num2 === 0) {
  return total; 
  }
else if (num1 < 0 && num2 < 0) {
  for (; num2 < 0; num2 = num2 + 1) {
    total = total + num1; 
  }
  return -total; 
}
else if (num1 > 0 && num2 < 0) {
    for(; num2 < 0; num2 = num2 + 1) {
      total = total - num1
    }
    return total; 
  }
else if (num1 < 0 && num2 > 0) {
  for(; num2 > 0; num2 = num2 - 1) {
      total = total + num1
    }
    return total; 
}
} 
var output = multiply(-2, -2);
//console.log(output); // --> 28

// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:
// * Do NOT use any native 'length' methods.
// * You might consider using 'substring' or 'slice' as alternatives.

function getStringLength(string) {
  // your code here
  //have a temp thing/
  //keep changing it until temp thing is zero
  var temp
  var count = 0
  var n = 1; 
  while (string !== "") {
      string = string.substring(1); 
      count = count + 1; 
  }
  return count; 
}

function myLength(s){
 return s.split('').reduce(function(prevVal, currElement){
  //inside the iterative function block
  return prevVal + 1;
 }, 0);  //need to have the very first 'prevVal' to work with on the 1st 
         //iteration only
}

//reference: https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter

var output = getStringLength('hello');
console.log(output); // --> 5
console.log(myLength('thr')) // 3


