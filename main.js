import SvgVisualizer from './SvgVisualizer.js';
window.onload = function() {
    var width = window.innerWidth * 0.8;
    var height = 400;
    var svg = new SvgVisualizer(height, width);
    $('#main').append(svg.generateSvg([...Array(20).keys()].map(i => ++i).sort(() => Math.random() - 0.5)));
    $('#main').html($('#main').html());
    //        var arr = [...Array(len).keys()].map(x => ++x);
    //arr.sort(() => Math.random() - 0.5);
}