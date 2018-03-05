
/**
* merge - Creates an empty array, and keeps pushing the elements of the
*         2 sub-arrays(before and after middle index) into the array.
*
* @param {array} left sub-array
* @param {array} right sub-array
*
* @returns {array}  merged sorted array
*/
const merge = function(leftArr,rightArr) {

    var i = 0,
        j = 0,
        leftArrLength = leftArr.length,
        rightArrLength = rightArr.length,
        finalArr = [];

    while (i < leftArrLength && j < rightArrLength) {

        if (leftArr[i] < rightArr[j]) {

            finalArr.push(leftArr[i]);
            i++;
        }
        else if (leftArr[i] > rightArr[j]) {

            finalArr.push(rightArr[j]);
            j++;
        }
        else {
            finalArr.push(leftArr[i]);
            i++;
            j++;
        }
    }
    if (i < leftArrLength) {

        while (i < leftArrLength) {

            finalArr.push(leftArr[i]);
            i++;
        }
    }
    else if (j < rightArrLength) {

        while (j < rightArrLength) {

            finalArr.push(rightArr[j]);
            j++;
        }
    }

    return finalArr;
}


/**
* mergeSort - Sorts the array by using divide-n-conquer(recursion) algo.
*             First finds a middle index by taking the average of the start and end index,
*             and then recursively calls itself with the 2 sub-arrays formed before and after the middle index.
* Time complexity - 
*      Best case - O(nlogn)
*      Worst case - O(nlogn)
*      Average case - O(nlogn)
*
* @param {array} array of integers
*
* @returns {array}  sorted array
*/
const mergeSort = function(arr) {

    if (arr.length <= 1) {
        return;
    }
    
    var midIdx = Math.floor(arr.length/2),
        leftSubArr = arr.slice(0,midIdx),
        rightSubArr = arr.slice(midIdx,arr.length);

    var sortedLeftSubArr = mergeSort(leftSubArr),
        sortedRightSubArr = mergeSort(rightSubArr);

    return merge(sortedLeftSubArr,sortedRightSubArr);

}

module.exports = mergeSort;