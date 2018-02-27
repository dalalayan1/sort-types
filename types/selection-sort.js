/**
* selectionSort - Sorts the array(in-place algo) by maintaining a current index,
*                 compares and checks for a lesser value for every element after it and updates the current index accordingly.
*                 and finally swaps the first element of the iteration with the current index element.
* Time complexity - 
*      Best case - O(n)
*      Worst case - O(n^2)
*      Average case - O(n^2) 
*
* @param {array} array of integers
* @returns {array}  sorted array
*/
const selectionSort = function(arr) {
    var arrLength = arr.length;

    for (var i = 0; i < arrLength; i++) {

        var lowestIdx = i;

        for (var j = i + 1; j < arrLength; j++) {

            if (arr[lowestIdx] > arr[j]) {
                lowestIdx = j;
            }
        }

        var temp = arr[lowestIdx];
        arr[lowestIdx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

module.exports = selectionSort;