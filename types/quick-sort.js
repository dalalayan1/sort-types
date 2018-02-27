

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