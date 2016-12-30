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
  var property = obj.key;
  var evenWords = []; 
  if (!Array.isArray(property)) {
      return []; 
  }
  else if (!property) {
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
console.log(output); // --> ['long', 'game']