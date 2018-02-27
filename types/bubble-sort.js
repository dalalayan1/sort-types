/**
 * bubbleSort - Sorts the array by swapping the cuurent element with the next,
 *              if the next element is smaller, until the largest element
 *              bubbles up to the last position of that iteration/pass.
 * Time complexity - 
 *      Best case - O(n)
 *      Worst case - O(n^2)
 *      Average case - O(n^2) 
 *
 * @param {array} array of integers
 * @returns {array}  sorted array
 */
const bubbleSort = function(arr) {
    var arrLength = arr.length;

    for (var i = 0; i < arrLength; i++) {

        for (var j = 0; j < arrLength - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;