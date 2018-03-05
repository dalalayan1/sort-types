

/**
* partition - Calculates a pivot index for the corresponding sub-array
*             in such a way that the elements left of it are lesser and right of it are greater.
*
* @param {array} array of integers
* @param {number} start index
* @param {number} end index
*
* @returns {number}  pivot index
*/
const partition = function(arr, start, end) {

    if (start < end) {
        var pivotEle = arr[end],
            pivotIdx = start,
            temp;

        for (var i = start; i < end; i++) {
            if (arr[i] < pivotEle) {
                temp = arr[i];
                arr[i] = arr[pivotIdx];
                arr[pivotIdx] = temp;
                pivotIdx++;
            }
        }

        temp = arr[pivotIdx];
        arr[pivotIdx] = arr[end];
        arr[end] = temp;

        return pivotIdx;

    }
}


/**
* quickSort - Sorts the array by using divide-n-conquer(recursion) algo.
*             First finds a partition index, and then recursively calls itself
*             with the 2 sub-arrays formed before and after the partition index.
* Time complexity - 
*      Best case - O(nlogn)
*      Worst case - O(nlogn)
*      Average case - O(n^2)
* Space complexity - O(n)
*
* @param {array} array of integers
* @param {number} start index
* @param {number} end index
* @returns {array}  sorted array
*/
const quickSort = function(arr, start, end) {
    if (!start) {
        start = 0;
    }
    
    if (!end) {
        end = arr.length - 1;
    }

    if (start < end) {

    var pivotIdx = partition(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);

    return arr;

    }
}

module.exports = quickSort;