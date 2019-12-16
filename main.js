window.onload = function () {
    svgWidth = 800;
    svgHeight = 400;
    $main = $('#main');

    $svg = $('<svg/>');
    $svg.addClass('bg-light rounded');
    $svg.attr('width', svgWidth);
    $svg.attr('height', svgHeight);
    $main.append($svg);

    len = 10;
    whiteSpace = 5;
    for (var i = 0; i < len; i++) {
        xOffset = (svgWidth / len) * i;
        $item = $('<rect/>');
        $item.attr('width', (svgWidth / len) - whiteSpace);
        $item.attr('height', svgHeight * .5);
        $item.attr('transform', 'translate(' + xOffset + ' ' +  svgHeight*.4 + ')');
        $item.addClass('unsorted');
        $svg.append($item);
    }

    $main.html($main.html());
}
