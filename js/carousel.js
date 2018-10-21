$(document).ready(function () {
	var $serviceSlider = $(".service-carousel");
	$serviceSlider.flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false
	});
	setTimeout(function () {
		$serviceSlider.flickity('resize');
	}, 10);
	removesImages();
});
