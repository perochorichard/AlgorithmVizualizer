
window.onload = function () {
    generateDataPoints(5);

    $(document).on('input', '#dataArrayRange', function () {

    });
}

function generateDataPoints(len) {
    let arr = [...Array(len).keys()].map(i => ++i).sort(() => Math.random() - 0.5);
    let max = Math.max.apply(null, arr);
    let maxHeight = 200;
    let width = 500 * (1 / arr.length);

    $('#xaxis').attr('colspan', arr.length).append(
        $('<div/>').css('height', (width > 30) ? 30 : width)
            .addClass('bg-info mt-1')
    );

    let $dataPoints = $('#datapoints');
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
            })
        );
        $dataPoints.append(dpoint);
    }
}