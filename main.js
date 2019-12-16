import SvgVisualizer from './SvgVisualizer.js';

window.onload = function() {
    let width = window.innerWidth * 0.8;
    let height = 400;
    let svg = new SvgVisualizer(height, width);
    $('#main').append(svg.generateSvg([...Array(20).keys()].map(i => ++i).sort(() => Math.random() - 0.5)));
    $('#main').html($('#main').html());
}