/* SIMPLIFYING EXPRESSIONS 
    
    1. O(n + 10) -> O(n)
    2. O(100 * n) -> O(n)
    3. O(25) -> O(1)
    4. O(n^2 + n^3) -> O(n^3)
    5. O(n + n + n + n) -> O(n)
    6. O(1000 * log(n) + n) -> O(n)
    7. O(1000 * n * log(n) + n) -> O(n * log(n))
    8. O(2^n + n^2) -> O(2^n)
    9. O(5 + 3 + 1) -> O(1)
    10. O(n + n^(1/2) + n^2 + n * log(n)^10) -> O(n^2)




*/

// Calculating Time Complexity

function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// O(n)

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// O(n)

function logAtMost10(n) {
    for (let i = l; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// O(1)

function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

// O(n)


function subtotals(array) {       
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  } 

  // O(n^2)

  function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }

    // O(n)

/* part 3 short answer

1. n^2 + n = O(n^2)
  True

2. n^2 * n is O(n^3)
  True 

3. n^2 + n is O(n)
  False

4. .indexOf array is O(n)

5. .includes array is O(n)

6. .forEach array is O(n)

7. .sort array is O(n log n)

8. .unshift array is O(n)

9. .push array is O(1)

10. .splice array is O(n)

11. .pop array is O(1)

12. Object.keys() is O(n)

13. Object.keys() space complexity is O(n)


*/