document.getElementById('cupon-code').addEventListener('keyup', function (event) {
	const text = event.target.value;
	const applyButton = document.getElementById('myButton');
	if (text === 'NEW15' || text === 'NEW20') {
		applyButton.removeAttribute('disabled');
	} else {
		applyButton.setAttribute('disabled', true);
	}
});

function toGetCuponDiscount() {
	// const grandTotalPrice = document.getElementById('grand-price');

	const cuponNumber = document.getElementById('cupon-code');
	const code = cuponNumber.value;

	const getFiftyPercentDiscount = document.getElementById('fifty-discount');
	const discount15 = getFiftyPercentDiscount.innerText;

	const getCoppleDiscount = document.getElementById('copple-discount');
	const coppleDiscount = getCoppleDiscount.innerText;

	if (code === discount15) {
		const grandTotalPrice = document.getElementById('grand-price');
		const price = 2200 - (2200 * 15) / 100;
		grandTotalPrice.innerText = price;
	} else if (code === coppleDiscount) {
		const grandTotalPrice = document.getElementById('grand-price');
		const price = 2200 - (2200 * 20) / 100;
		grandTotalPrice.innerText = price;
	} else {
		alert('Invalid code');
	}
}
