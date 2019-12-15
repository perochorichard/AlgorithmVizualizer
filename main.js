window.onload = function() {
    $slider = $('#arraySlider');
    $('#debug').html('size: ' + $slider.val());
    $div = $('<div/>');
    $div.html('hello');
    $slider.on('input', function() {
        var size = $slider.val();
        $('#debug').html('size: ' + size);
        $('#main').append($div.clone());
    })

}