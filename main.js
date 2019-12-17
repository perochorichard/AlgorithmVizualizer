
window.onload = function() {
    let arr = [...Array(20).keys()].map(i => ++i).sort(() => Math.random() - 0.5);
    let max = Math.max.apply(null, arr);
    let maxHeight = 200;

    let $dataPoints = $('#datapoints');
    let $dPointContainer = $('<td/>');
    $dPointContainer.addClass('align-bottom');
    let $dPoint = $('<div/>');
    $dPoint.addClass('bg-unsorted');

    for (var i = 0; i < arr.length; i++) {
        let height = maxHeight * (arr[i] / max);

        let dpoint = $dPointContainer.clone().append(
            $dPoint.clone().css('height', (height + 'px'))
        );
        $dataPoints.append(dpoint);
    }
}