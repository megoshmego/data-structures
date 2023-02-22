function findFloor(arr, low, high, x){
    if (low > high) 
        return -1;
    if (x >= arr[high]) 
        return high;
    let mid = Math.floor((low + high)/2);
    if (arr[mid] == x) 
        return mid;
    if (mid > 0 && arr[mid-1] <= x && x < arr[mid]) 
        return mid-1;
    if (x < arr[mid]) 
        return findFloor(arr, low, mid-1, x);
    
        return findFloor(arr, mid+1, high, x);
}