
let arr = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
function mergeSort(arr, low, high) {
    if ((high - low) <= 1) {
        return;
    }

    let mid = Math.round(low + ((high - low) / 2));

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);
    function merge(arr, low, mid, high) {

        let start1 = low;
        let start2 = mid + 1;
        while (start1 <= mid && start2 <= high) {
            if (arr[start1] < arr[start2]) {
                start1++;
            } else {
                swap(start1, start2, arr);
                start2++;
            }
        }
    }

    function swap(a, b, arr) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}