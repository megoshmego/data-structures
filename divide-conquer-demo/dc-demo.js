function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return i //return index 
    }
    return -1;
}

// O(n)

// there is a better way to do this IF the array is sorted

// if the array is sorted, we can use binary search

// first, look at the middle value of the array

// if the middle value is the target, return the index

// if the middle value is greater than the target, look at the left half of the array

// if the middle values is less than the target, look at the left half of the array 

// this eliminates 50% of data for finding the target

// just keep middle-ing shit

// create an array that will accept a sorted array 


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


// O(log n)



[3,4,6,9,10,12,15,22,30,31]


// how log works, how many times can you divide the number by 2 until you get to 1


/* Divide and conquer description of binary search
    removes a large fraction of the data set from consideration at each step

    Typically, the data set must have some additional structure, e.g. be sorted 

    significantly improves time complexity
    
    if you can quickly think of a linear solution quickly, it is good to consider a divide and conquer
*/
