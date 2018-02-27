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