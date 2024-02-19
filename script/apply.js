function toGetCuponDiscount() {
	const cuponNumber = document.getElementById('cupon-code');
	const code = cuponNumber.value;

	const getFiftyPercentDiscount = document.getElementById('fifty-discount');
	const discount15 = getFiftyPercentDiscount.innerText;

	const getCoppleDiscount = document.getElementById('copple-discount');
	const coppleDiscount = getCoppleDiscount.innerText;

	if (code === discount15) {
		alert('hello');
	} else if (code === coppleDiscount) {
		alert('right');
	} else {
		alert('wrong');
	}
}
