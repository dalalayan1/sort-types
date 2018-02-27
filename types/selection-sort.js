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