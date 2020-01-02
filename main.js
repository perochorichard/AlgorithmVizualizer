import sleep from './Async.js';
import BubbleSort from './Algorithms/BubbleSort.js';
import QuickSort from './Algorithms/QuickSort.js';

let DEFAULT_COLOR = '#bacddf';
let HIGHLIGHTED_COLOR = '#17A2B8';
let ALGORITHMS = [BubbleSort, QuickSort];
let arr = [];

async function swap(i, j) {
    let dp1 = $('#' + i);
    let dp2 = $('#' + j);
    dp1.css('background-color', HIGHLIGHTED_COLOR);
    dp2.css('background-color', HIGHLIGHTED_COLOR);
    
    await sleep(0).then(() => {
        let tmp = dp1.css('height');
        dp1.css('height', dp2.css('height'));
        dp2.css('height', tmp);
        dp1.css('background-color', DEFAULT_COLOR);
        dp2.css('background-color', DEFAULT_COLOR);
    });
}

async function completeSort() {
    for (var i = 0; i < arr.length; i++) {
        await sleep(1).then(() => {
            $('#' + i).css('background-color', HIGHLIGHTED_COLOR);
        });
    }
}


function generateDataPoints(arr) {
    let max = Math.max.apply(null, arr);
    let maxHeight = 0.5 * window.innerHeight;

    let $dataPoints = $('<tr/>')
        .attr('id', 'datapoints');

    let $dPointContainer = $('<td/>')
        .addClass('align-bottom p-0');

    let $dPoint = $('<div/>')
        .css('background-color', '#bacddf');

    for (var i = 0; i < arr.length; i++) {
        let height = maxHeight * (arr[i] / max);

        let dpoint = $dPointContainer.clone().append(
            $dPoint.clone().css({
                'height': (height + 'px')
            }).attr('id', i));
        $dataPoints.append(dpoint);
    }

    return $dataPoints;
}

window.onload = function() {
    arr = [...Array(1000).keys()].map(i => ++i).sort(() => Math.random() - 0.5);
    $('#tablebody').append(generateDataPoints(arr));
    
    // sorts the data set with specific algorithm
    $('#sort').on('click', function () {
        let algo_index = parseInt($('#algo-type').val(), 10);
        let algo = new ALGORITHMS[algo_index](arr);
        algo.updateEvent = swap;
        algo.completedEvent = completeSort;
        algo.sort();
    });
}