/*

function binarySearch(arr, val){
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        if(middleVal < val){
            leftIdx = middleIdx +1;
        } else if (middleVal > val){
            rightIdx = middleIdx -1;
        } else {
                return middleIdx;
        }
    }
    return -1;
}
*/

// slightly alter the binary iterative search of the left and right index arrays and including logic to check if the array is sorted in ascending or descending order.



// Path: find-rotated-index.js

function findRotatedIndex(arr, val){
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];
        let leftVal = arr[leftIdx];
        let rightVal = arr[rightIdx];
        if(middleVal === val) return middleIdx;
        if(leftVal <= middleVal){
            if(val >= leftVal && val < middleVal){
                rightIdx = middleIdx -1;
            } else {
                leftIdx = middleIdx +1;
            }
        } else {
            if(val > middleVal && val <= rightVal){
                leftIdx = middleIdx +1;
            } else {
                rightIdx = middleIdx -1;
            }
        }
    }
    return -1;
}
