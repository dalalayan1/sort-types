function bubbleSort(arr) {
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


function selectionSort(arr) {
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


function insertionSort(arr) {

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


function mergeSort(arr, start, end) {

    if (start >= end) {
        return;
    }

    var arrLength = arr.length,
        midIndex = Math.floor((start + end) / 2);

    mergeSort(arr, start, midIndex);
    mergeSort(arr, midIndex + 1, end);
    return merge(arr, start, end);

}

function merge(arr, start, end) {

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


function quickSort(arr, start, end) {
    if (start < end) {

    var pivotIdx = partition(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);

    return arr;

    }
}

function partition(arr, start, end) {

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