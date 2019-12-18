
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
        $(this).attr('disabled', true);
        $('#dataArrayRange').attr('disabled', true);

        // check if data exists to sort through
        let $datapoints = $('#datapoints');
        if ($datapoints.length <= 0) {
            console.log('data points don\'t exist');
            return;
        }

        console.log(arr); // BEFORE SORT
        // BUBBLE SORT
        // first loop goes down (highest to lowest sort)
        for (var i = arr.length; i > 0; i--) {
            // iterates through i (i = i-1 every iteration)
            for (var j = 1; j < i; j++) {
                if (arr[j - 1] > arr[j]) {
                    arr = swap(j - 1, j, arr);
                    doSetTimeOut(j);
                }
            }
        }

        console.log(arr); // AFTER SORT
        $(this).attr('disabled', false);
        $('#dataArrayRange').attr('disabled', false);
    });
}

function doSetTimeOut(j) {
    setTimeout(() => {
        visualSwap($('#' + (j - 1)), $('#' + j));
    }, 1000);
}

function swap(a, b, arr) {
    let valA = arr[a];
    arr[a] = arr[b];
    arr[b] = valA;

    return arr;
}

function visualSwap(a, b) {
    let aHeight = a.css('height');
    a.css('height', b.css('height'));
    b.css('height', aHeight);
}

function generateDataPoints(arr) {
    let max = Math.max.apply(null, arr);
    let maxHeight = 700;
    let width = 500 * (1 / arr.length);

    let $dataPoints = $('<tr/>');
    $dataPoints.attr('id', 'datapoints');
    let $dPointContainer = $('<td/>');
    $dPointContainer.addClass('align-bottom p-0');
    let $dPoint = $('<div/>');
    $dPoint.addClass('bg-unsorted mx-auto');

    for (var i = 0; i < arr.length; i++) {
        let height = maxHeight * (arr[i] / max);

        let dpoint = $dPointContainer.clone().append(
            $dPoint.clone().css({
                'height': (height + 'px'),
                'width': width + 'px'
            }).attr('id', i));
        $dataPoints.append(dpoint);
    }

    return $dataPoints;
}