// Description: Given a sorted array of 1s and 0s, return the number of zeroes in the array.
module.exports = countZeroes




/*
**********************************************************************

 DEMO CODE

function binary_Search(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));   
console.log(binary_Search(items, 5));

var arr = [3,3,3,4,5,5,6,6,6,7,8,8,9];
console.log(sortedFrequency(arr, 6));
console.log(sortedFrequency(arr, 8));


************************************************************

MY PSEUDOCODE 
note to self, i CAN use zeroes bc this is the index of the array not value           
        // count = 0 
            // if the middleidx value is === val, look to left side for more zeroes
                // if there are no more zeroes, return to middleidx , count ++ .. lastIdx
                    // if val > middle idx, look to right or firstIdx = middleIdx + 1, count ++
                        // return count 

                                // MY MISTAKE - could have simplified by using left idx <= right Idx 
            
    }
}

*/


function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let count = 0;
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        if(arr[middleIdx] === 0){
            count++;
            rightIdx = middleIdx - 1;
        } else if(arr[middleIdx] === 1){
            leftIdx = middleIdx + 1;
        }
    }
    return count;
}