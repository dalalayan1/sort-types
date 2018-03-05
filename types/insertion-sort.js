/**
* insertionSort - Sorts the array by finding the correct index for the current element.
*                 Basically re-arranges all the greater elements before it, to its right,
*                 and places the current element in that position, such that the sub-array becomes sorted till that position.
* Time complexity - 
*      Best case - O(n)
*      Worst case - O(n^2)
*      Average case - O(n^2) 
*
* @param {array} array of integers
*
* @returns {array}  sorted array
*/
const insertionSort = function(arr) {

    var arrLength = arr.length;

    for (var i = 1; i < arrLength; i++) {

        var curr = arr[i], shiftIdx = i;

        for (var j = i - 1; j >= 0; j--) {

            if (curr > arr[j]) {
                break;
            }
            else {
                arr[j + 1] = arr[j];
                shiftIdx = j;
            }
        }

        var temp = arr[shiftIdx];
        arr[shiftIdx] = curr;
        curr = temp;
    }
    return arr;
}

module.exports = insertionSort;