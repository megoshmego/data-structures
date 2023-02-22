

// Write a function called sortedFrequency that counts the occurrences of a number in a sorted array.

function sortedFrequency(items, value) {
  let leftIdx = 0;
  let rightIdx = items.length - 1;
  let count = 0;
  while (leftIdx <= rightIdx) {
    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (items[middleIdx] === value) {
      count++;
      rightIdx = middleIdx - 1;
    } else if (items[middleIdx] > value) {
      leftIdx = middleIdx + 1;
    }
  }
  return count;
}

let items = [1, 2, 4, 4, 4, 5, 6, 6, 6, 6, 6, 7, 7, 9, 9];

console.log(sortedFrequency(items, 6));
