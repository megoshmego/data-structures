/** PRODUCT: calculate the product of an array of numbers. */

function product(array, size, sum = 0) {
  if (size = 0)
      return sum;
  
  return product(array, size -1, sum + array[size -1]); 
}

// array = [];
// size = array.length
// Product(arrSum(array, size));



/** LONGEST: return the length of the longest word in an array of words. */

function longest(str) {

  let word = str.split(' ');
  if (word.length === 1) {
    return word.length;
  }

  return Math.max(
    word[0].length,
    longest(word.slice(1).join(" "))
  );
}

/* Regular For Loop

function findLongestWord(str) {

  var strSplit = str.split('');

  var longestWord = 0;

  for(var i = 0, i < strSplit.length, i++) {    // condition
    if(strSplit[].length > longestWord) {       
    longestWord = strSplit[i].length;
    }
  }
  return longestWord; 
}
*/ 



/** EVERYOTHER: return a string with every other letter. */


/* MUST INTALL: npm install --save slice.js */

function everyOther(str) {

  let splitStr = string.split(' ');
  if(letters.index === 0) {
    return word.length;
  }

  return word[0].length,
  everyOther(word.slice('1: :2').join(' ')); 

}

/*

FOR Loop iteration for every other string problem 

function everyOther(string) {
  let splitStr = string.split(' ');
  let newArry = [];
  
  for (j = 0; j < splitStr.length; j++) {
    let letters = splitStr(' ');
    for (var i = 0; i < letters.length; i++) {
      if (letters.indexOf(letters[i]) %2 === 0) {
        return letters[i];
      } 
    }
    newArry.push(letters.join(' '));
  }
}


*/

/** ISPALINDROME: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1, -1))
    return false;
}

/** FINDINDEX: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
    if (i > arr.length) return -1;
    if (arr[i] === item) return i;
    return findIndex(arr, val, i + 1);
 }

/** REVSTRING: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length <= 1) {
    return str;
  }
  else {
    return str.charAt(str.length - 1) + revString(str.substring(0, str.length -1));
  }
}

/** GATHERSTRINGS: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let newArr = []
    for(let key in obj) {
      newArr.push(typeof(obj[key]) === 'object') {
        newArr = newArr.concat(gatherStrings(obj[key]));
      }
    }
    return newArr
}

/** BINARY SEARCH: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let middleIndex = Math.floor(arr.length / 2);
  let middleElement = arr[middleIndex];

  if (middleElement === val) return true;

  else if (middleElement < val && nums.length > 1) {
    return binarySearch(nums.slice(middleIndex, nums.length), val)
  }
  else if (middleElement > val && arr.length > 1) {
    return binarySearch(arr.slice(0, middleIndex), val);
  }
  else return false;
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
