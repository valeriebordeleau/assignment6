var $btnRotate = $('.btn-rotate');


var $btnExpand = $('.btn-collapse-expand');
var $panel = $('.panel')

$btnExpand.on('click', function () {
    $panel.toggleClass('js-btn-collapse-expand');
});

var $btnShow = $('.btn-show-hide');
var $box = $('.box');

$btnShow.on('click', function () {
    $box.toggleClass('js-btn-hide');
});
