window.onload = function () {
    this.generateSvg();
}

function generateSvg() {
    svgWidth = $(window).width() * .7;
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

    var arr = [...Array(20).keys()];
    arr.sort(() => Math.random() - 0.5);
    var max = this.Math.max.apply(null, arr);
    whiteSpace = (svgWidth / arr.length) / 2;
    for (var i = 0; i < arr.length; i++) {
        itemHeight = (svgHeight * (arr[i] / max)) * .9;
        itemWidth = (svgWidth / arr.length) - whiteSpace;
        xOffset = (svgWidth / arr.length) * i + whiteSpace / 2;
        yoffset = graphBottom - itemHeight - 10;

        $g = $('<g/>');
        $g.attr('transform', 'translate(' + xOffset + ' ' + yoffset  + ')');

        $item = $('<rect/>');
        $item.attr('width', itemWidth);
        $item.attr('height', itemHeight);
        $item.addClass('fill-secondary');

        $text = $('<text/>');
        $text.attr('x', (itemWidth / 2));
        $text.attr('y', itemHeight - 10);
        $text.attr('text-anchor', 'middle');
        $text.addClass('fill-light');
        $text.html(arr[i]);

        $g.append($item);
        $g.append($text);

        $svg.append($g);
    }

    $main.html($main.html()); // refresh for svg
}

// <polyline points="20 30, 40 10, 60 30" style="fill:none;stroke:black;stroke-width:8" />
