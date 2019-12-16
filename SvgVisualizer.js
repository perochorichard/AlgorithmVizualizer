export default class SvgAlgoVisualizer {
    constructor(height, width) {
        this.svgHeight = height;
        this.svgWidth = width;

        
    }

    generateSvg(arr) {
        let graphBottom = this.svgHeight * .9;
    
        let $svg = $('<svg/>');
        //$svg.addClass('bg-light');
        $svg.attr('width', this.svgWidth);
        $svg.attr('height', this.svgHeight);
    
        // create x axis
        let $xaxis = $('<rect/>');
        $xaxis.attr('width', this.svgWidth);
        $xaxis.attr('height', 15);
        $xaxis.attr('transform', 'translate(0 ' + graphBottom + ')');
        $xaxis.addClass('fill-primary');
        $svg.append($xaxis);
    
        // create data points
        let max = Math.max.apply(null, arr);
        let whiteSpace = (this.svgWidth / arr.length) / 2;

        for (let i = 0; i < arr.length; i++) {
            let itemHeight = (this.svgHeight * (arr[i] / max)) * .87;
            let itemWidth = (this.svgWidth / arr.length) - whiteSpace;
            let itemXOffset = (this.svgWidth / arr.length) * i + whiteSpace / 2;
            let itemYoffset = graphBottom - itemHeight - 10;

            let $g = $('<g/>');
            $g.attr('transform', 'translate(' + itemXOffset + ' ' + itemYoffset + ')');
    
            let $item = $('<rect/>');
            $item.attr('width', itemWidth);
            $item.attr('height', itemHeight);
            $item.addClass('fill-secondary');
            $g.append($item);
    
            if (arr.length <= 20) {
                let $text = $('<text/>');
                $text.attr('x', (itemWidth / 2));
                $text.attr('y', itemHeight - 10);
                $text.attr('text-anchor', 'middle');
                $text.addClass('fill-light');
                $text.html(arr[i]);
                $g.append($text);
            }
    
            $svg.append($g);
        }

        return $svg;
    }
}

// <polyline points="20 30, 40 10, 60 30" style="fill:none;stroke:black;stroke-width:8" />
