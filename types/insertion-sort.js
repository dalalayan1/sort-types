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