import sleep from './Async.js';

let default_color = '#bacddf';
let highlight_color = '#17A2B8';

function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function visualSwap(a, b) {
    let aHeight = a.css('height');
    a.css('height', b.css('height'));
    b.css('height', aHeight);
}

async function completeSort(len) {
    for (var i = 0; i < len; i++) {
        await sleep(10).then(() => {
            $('#' + i).css('background-color', highlight_color);
        });
    }
}

async function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 1; j < i; j++) {
            let dp1 = $('#' + (j - 1));
            let dp2 = $('#' + j);
            dp1.css('background-color', highlight_color);
            dp2.css('background-color', highlight_color);
            if (arr[j - 1] > arr[j]) {
                await sleep(1).then(() => {
                    swap(j - 1, j, arr);
                    visualSwap(dp1, dp2);
                });
            }
            dp1.css('background-color', default_color);
            dp2.css('background-color', default_color);
        }
    }
    await completeSort(arr.length);
}

async function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = await partition(arr, low, high);

        await quickSort(arr, low, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, high);
    }

    async function partition(arr, low, high) {
        $('#' + high).css('background-color', '#F1292B');
        let i = low - 1;

        for (var j = low; j <= high - 1; j++) {
            if (arr[j] < arr[high]) {
                ++i;
                let dp1 = $('#' + i);
                let dp2 = $('#' + j);
                dp1.css('background-color', highlight_color);
                dp2.css('background-color', highlight_color);
                await sleep(1).then(() => {
                    swap(i, j, arr);
                    visualSwap(dp1, dp2);
                });
                dp1.css('background-color', default_color);
                dp2.css('background-color', default_color);
            }
        }
        let dp1 = $('#' + (i + 1));
        let dp2 = $('#' + high);
        dp1.css('background-color', highlight_color);
        await sleep(1).then(() => {
            swap(i + 1, high, arr);
            visualSwap(dp1, dp2);
        })
        dp1.css('background-color', default_color);
        dp2.css('background-color', default_color);
        return (i + 1);
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) {
        return;
    }

    let mid = Math.round((high - low) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(low, mid, high);
    function merge(arr, low, mid, high) {
        console.log('merging')
    }
}

export default { bubbleSort, quickSort, completeSort, mergeSort };