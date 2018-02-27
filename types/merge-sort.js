

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


const mergeSort = function(arr, start, end) {

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