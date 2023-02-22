
/*     let leftIdx = 0;
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


// rotating an array counter clockwise means to pop() the end and unshift() to the front w/ a destructive function
//  

function countRotations(arr, n) {
    let low = 0, high = n - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let prev = (mid-1 + n) % n, next = (mid+1) % n;
        if(arr[mid]<=arr[prev] && arr[mid]<=arr[next]){
            return mid;
        } else if(arr[mid]<=arr[high]){
            high = mid - 1;
        } else if(arr[mid]>=arr[low]){
            low = mid + 1;  
        }
        return 0;
    }
}