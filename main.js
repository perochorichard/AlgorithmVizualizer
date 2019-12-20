
import algorithms from './Algorithms.js';

window.onload = function () {
    let arr = shuffle(5);

    $('#xaxis').attr('colspan', 200).append(
        $('<div/>').css('height', 30)
            .addClass('bg-info mt-1'));

    $(document).on('input', '#dataArrayRange', function () {
        let len = parseInt($(this).val(), 10);
        arr = shuffle(len);
    });

    $('#algo-type').on('input', function() {
        let algo = $(this).val();
        switch(algo) {
            case 'bubblesort':
                $('#dataArrayRange').attr('max', 100).prop('value', 5);
                arr = shuffle(5);
                break;
            case 'quicksort':
                $('#dataArrayRange').attr('max', 200).prop('value', 5);
                arr = shuffle(5);
                break;
        }
    });

    $('#sort').on('click', function () {
        let algo = $('#algo-type').val();

        switch (algo) {
            case 'bubblesort':
                disableControlPanel(true);
                algorithms.bubbleSort(arr).then(() => {
                    disableControlPanel(false);
                });
                break;
            case 'quicksort':
                disableControlPanel(true);
                algorithms.quickSort(arr, 0, arr.length - 1).then(() => {
                    console.log('f: ' + arr);
                    algorithms.completeSort(arr.length).then(() => {
                        disableControlPanel(false);
                    });
                });
                break;
            default:
                warn();
                return;
        }

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
        .addClass('mx-auto m-0 border border-dark')
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

function shuffle(len) {
    let arr = [...Array(len).keys()].map(i => ++i).sort(() => Math.random() - 0.5);
    let $tbody = $('#tablebody');
    let data = generateDataPoints(arr);
    $tbody.children().remove('#datapoints');
    $tbody.append(data);
    return arr;
}

async function warn() {
    $('#warn').css('visibility', 'visible');
    setTimeout(() => {
        $('#warn').css('visibility', 'hidden');
    }, 1500);
}

function disableControlPanel(bool) {
    let temp = bool ? '<span class="spinner-border spinner-border-sm"></span> sorting..' : 'sort';

    $('#sort').html(temp);
    $('#sort').attr('disabled', bool);
    $('#dataArrayRange').attr('disabled', bool);
}

