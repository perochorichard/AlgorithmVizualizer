import BubbleSort from './Algorithms/BubbleSort.js';
import QuickSort from './Algorithms/QuickSort.js';
import InsertionSort from './Algorithms/InsertionSort.js';

let ALGORITHMS = [BubbleSort, QuickSort, InsertionSort];
let arr = [];

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

        arr[i] = height;
    }
    console.log(arr);

    return $dataPoints;
}

window.onload = function () {
    arr = [...Array(10).keys()].map(i => ++i).sort(() => Math.random() - 0.5);
    $('#tablebody').append(generateDataPoints(arr));

    // sorts the data set with specific algorithm
    $('#sort').on('click', function () {
        try {
            console.log(arr);
            let algo_index = parseInt($('#algo-type').val(), 10);
            let algo = new ALGORITHMS[algo_index](arr);
            algo.sort().then(() => {
                console.log(arr);
            })
        } catch(err) {
            console.log(err);
            warn();
        }
    });

    $('#shuffle').on('click', function() {
        shuffle(arr.length);
    });

    $('#array-range').on('input', function() {
        let l = parseInt($(this).val(), 10);
        shuffle(l);
    });
}

function shuffle(len) {
    $('#tablebody').children().remove();
    arr = [...Array(len).keys()].map(i => ++i).sort(() => Math.random() - 0.5);
    $('#tablebody').append(generateDataPoints(arr));
}

async function warn() {
    $('#warn').css('visibility', 'visible');
    setTimeout(() => {
        $('#warn').css('visibility', 'hidden');
    }, 1500);
}