
import bubbleSort from './Algorithms.js';

window.onload = function () {
    let arr = [...Array(5).keys()].map(i => ++i).sort(() => Math.random() - 0.5);
    let $tbody = $('#tablebody');
    let data = generateDataPoints(arr);
    $tbody.append(data);

    $('#xaxis').attr('colspan', 200).append(
        $('<div/>').css('height', 30)
            .addClass('bg-info mt-1'));

    $(document).on('input', '#dataArrayRange', function () {
        let len = parseInt($(this).val(), 10);
        arr = [...Array(len).keys()].map(i => ++i).sort(() => Math.random() - 0.5);
        data = generateDataPoints(arr);
        $tbody.children().remove('#datapoints');
        $tbody.append(data);
    });

    $('#sort').on('click', function () {
        $(this).html('<span class="spinner-border spinner-border-sm"></span> sorting..');
        $(this).attr('disabled', true);
        $('#dataArrayRange').attr('disabled', true);

        // check if data exists to sort through
        let $datapoints = $('#datapoints');
        if ($datapoints.length <= 0) {
            console.log('data points don\'t exist');
            return;
        }

        bubbleSort(arr).then(() => {
            $(this).html('sort');
            $(this).attr('disabled', false);
            $('#dataArrayRange').attr('disabled', false);
        });
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