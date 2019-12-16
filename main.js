window.onload = function () {
    svgWidth = 800;
    svgHeight = 400;
    graphBottom = svgHeight * .93;
    $main = $('#main');

    $svg = $('<svg/>');
    //$svg.addClass('bg-light rounded');
    $svg.attr('width', svgWidth);
    $svg.attr('height', svgHeight);
    $main.append($svg);

    $xaxis = $('<rect/>');
    $xaxis.attr('width', svgWidth);
    $xaxis.attr('height', 15);
    $xaxis.attr('transform', 'translate(0 ' + graphBottom +')');
    $xaxis.addClass('fill-primary');
    $svg.append($xaxis);

    whiteSpace = 30;
    var arr = [10, 21, 32, 48, 56, 18, 55, 6, 11, 20];
    var max = this.Math.max.apply(null, arr);
    for (var i = 0; i < arr.length; i++) {
        itemHeight = (svgHeight * arr[i] / max) * .9;
        xOffset = (svgWidth / arr.length) * i + whiteSpace / 2;
        $item = $('<rect/>');
        $item.attr('width', (svgWidth / arr.length) - whiteSpace);
        $item.attr('height', itemHeight);
        $item.attr('transform', 'translate(' + xOffset + ' ' + (graphBottom - itemHeight - 10)  + ')');
        $item.addClass('fill-secondary');
        $svg.append($item);
    }

    $main.html($main.html()); // refresh for svg
}

