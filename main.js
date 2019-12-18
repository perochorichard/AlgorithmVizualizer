
window.onload = function () {
    let $tbody = $('#tablebody');
    let data = generateDataPoints(5);
    $tbody.append(data);

    $('#xaxis').attr('colspan', 200).append(
        $('<div/>').css('height',  30)
            .addClass('bg-info mt-1'));

    $(document).on('input', '#dataArrayRange', function () {
        data = generateDataPoints(parseInt($(this).val()), 10);
        $tbody.children().remove('#datapoints');
        $tbody.append(data);

    });

    $('#sort').on('click', function() {
        let first = data.children().eq(1).children().first();
        let second = data.children().eq(3).children().first();

        swap(first, second);
    });
}

function swap(a, b) {
    let aHeight = a.css('height');
    a.css('height', b.css('height'));
    b.css('height', aHeight);
}

function generateDataPoints(len) {
    let arr = [...Array(len).keys()].map(i => ++i).sort(() => Math.random() - 0.5);
    let max = Math.max.apply(null, arr);
    let maxHeight = 500;
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
            })
        );
        $dataPoints.append(dpoint);
    }

    return $dataPoints;
}