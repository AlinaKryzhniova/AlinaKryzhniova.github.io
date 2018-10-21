
$("#btn-more").click(function () {
	const $images = $('#tours-images .section-tours__flex-container');
	$images.removeClass('remove');
	$(this).parent().addClass('removeBtn');
});



function removesImages() {
	const $images = $('#tours-images .section-tours__flex-container');
	if ($images.length <= 8 || $images.length >= 4) {
		var removeImgs = $images.splice($images.length - 4, 4);
		removeImgs.forEach(element => {
			$(element).addClass('remove');
		});
	}
}


