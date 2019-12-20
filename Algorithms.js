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

export default async function bubbleSort(arr) {
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