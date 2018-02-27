
/**
* merge - Creates an empty array, and keeps pushing the elements of the
*         2 sub-arrays(before and after middle index) into the array.
*
* @param {array} array of integers
* @param {number} start index
* @param {number} end index
* @returns {array}  merged sorted array
*/
const merge = function(arr, start, end) {

    var midIdx = Math.floor((start + end) / 2),
        i = start,
        j = midIdx + 1,
        finalArr = [];

    while (i <= midIdx && j <= end) {

        if (arr[i] < arr[j]) {

            finalArr.push(arr[i]);
            i++;
        }
        else if (arr[i] > arr[j]) {

            finalArr.push(arr[j]);
            j++;
        }
        else {

            finalArr.push(arr[i]);
            i++;
            j++;
        }
    }
    if (i < midIdx) {

        while (i < midIdx) {

            finalArr.push(arr[i]);
            i++;
        }
    }
    else if (j < end) {

        while (j < end) {

            finalArr.push(arr[j]);
            j++;
        }
    }

    arr.forEach(function (ele, idx) {
        ele = finalArr[idx];
    });

    return arr;
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
* @param {number} start index
* @param {number} end index
* @returns {array}  sorted array
*/
const mergeSort = function(arr, start, end) {
    if (!start) {
        start = 0;
    }
    
    if (!end) {
        end = arr.length - 1;
    }

    if (start >= end) {
        return;
    }

    var arrLength = arr.length,
        midIndex = Math.floor((start + end) / 2);

    mergeSort(arr, start, midIndex);
    mergeSort(arr, midIndex + 1, end);
    return merge(arr, start, end);

}

module.exports = mergeSort;