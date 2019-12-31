import sleep from './Async.js';
import BubbleSort from './BubbleSort.js';

let DEFAULT_COLOR = '#bacddf';
let HIGHLIGHTED_COLOR = '#17A2B8';

let arr = [...Array(100).keys()].map(i => ++i).sort(() => Math.random() - 0.5);;

async function swap(i, j) {
    let dp1 = $('#' + i);
    let dp2 = $('#' + j);
    dp1.css('background-color', HIGHLIGHTED_COLOR);
    dp2.css('background-color', HIGHLIGHTED_COLOR);
    
    await sleep(1).then(() => {
        let tmp = dp1.css('height');
        dp1.css('height', dp2.css('height'));
        dp2.css('height', tmp);
        dp1.css('background-color', DEFAULT_COLOR);
        dp2.css('background-color', DEFAULT_COLOR);
    });
}

window.onload = function() {
    $('#tablebody').append(generateDataPoints(arr));
    $('#sort').on('click', function () {
        let bs = new BubbleSort(arr);
        bs.updateEvent = swap;
        bs.sort();
    });
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