var totalSit = 0;

function toShowBuyTicket() {
	const pParibahan = document.getElementById('p-paribahan');
	pParibahan.classList.remove('hidden');
}

function toSiteNoOneSelect() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

	const toGetTotalPrice = document.getElementById('total-price');
	const totalPrice = totalSit * 550;
	toGetTotalPrice.innerText = totalPrice;

	const setBackgroundColor = document.getElementById('toChange-color');
	setBackgroundColor.classList.add('bg-[#1DD100]');

	const selectSitNumber = document.getElementById('select-sit-num');
	const seeText = selectSitNumber.innerText;
	const sit = parseInt(seeText);
	const sitNumber = sit + 1;
	selectSitNumber.innerText = sitNumber;

	const reminderSitNumber = document.getElementById('remider-sit');
	const remiderNumber = reminderSitNumber.innerText;
	const remidersit = parseInt(remiderNumber);
	const remider = remidersit - 1;
	reminderSitNumber.innerText = remider;

	const showTicket = document.getElementById('show-ticket');
	const p = document.createElement('p');
	p.textContent = `A1-------------------------  economy  ----------------------550`;
	showTicket.appendChild(p);
}

function buttonTwo() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

	const toGetTotalPrice = document.getElementById('total-price');
	const totalPrice = totalSit * 550;
	toGetTotalPrice.innerText = totalPrice;

	const selectSecoundButton = document.getElementById('secound');
	selectSecoundButton.classList.add('bg-[#1DD100]');

	const selectSitNumber = document.getElementById('select-sit-num');
	const seeText = selectSitNumber.innerText;
	const sit = parseInt(seeText);
	const sitNumber = sit + 1;
	selectSitNumber.innerText = sitNumber;

	const reminderSitNumber = document.getElementById('remider-sit');
	const remiderNumber = reminderSitNumber.innerText;
	const remidersit = parseInt(remiderNumber);
	const remider = remidersit - 1;
	reminderSitNumber.innerText = remider;

	const showTicket = document.getElementById('show-ticket');
	const p = document.createElement('p');
	p.textContent = `A2-------------------------  economy  ----------------------550`;
	showTicket.appendChild(p);
}
function toSelectThree() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

	const toGetTotalPrice = document.getElementById('total-price');
	const totalPrice = totalSit * 550;
	toGetTotalPrice.innerText = totalPrice;

	const slelectThirdButton = document.getElementById('third');
	slelectThirdButton.classList.add('bg-[#1DD100]');

	const selectSitNumber = document.getElementById('select-sit-num');
	const seeText = selectSitNumber.innerText;
	const sit = parseInt(seeText);
	const sitNumber = sit + 1;
	selectSitNumber.innerText = sitNumber;

	const reminderSitNumber = document.getElementById('remider-sit');
	const remiderNumber = reminderSitNumber.innerText;
	const remidersit = parseInt(remiderNumber);
	const remider = remidersit - 1;
	reminderSitNumber.innerText = remider;

	const showTicket = document.getElementById('show-ticket');
	const p = document.createElement('p');
	p.textContent = `A3-------------------------  economy  ----------------------550`;
	showTicket.appendChild(p);
}
function toSelectFour() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

	const toGetTotalPrice = document.getElementById('total-price');
	const totalPrice = totalSit * 550;
	toGetTotalPrice.innerText = totalPrice;

	const selectFourButton = document.getElementById('four');
	selectFourButton.classList.add('bg-[#1DD100]');

	const selectSitNumber = document.getElementById('select-sit-num');
	const seeText = selectSitNumber.innerText;
	const sit = parseInt(seeText);
	const sitNumber = sit + 1;
	selectSitNumber.innerText = sitNumber;

	const reminderSitNumber = document.getElementById('remider-sit');
	const remiderNumber = reminderSitNumber.innerText;
	const remidersit = parseInt(remiderNumber);
	const remider = remidersit - 1;
	reminderSitNumber.innerText = remider;

	const showTicket = document.getElementById('show-ticket');
	const p = document.createElement('p');
	p.textContent = `A4-------------------------  economy  ----------------------550`;
	showTicket.appendChild(p);
}
function selectSitFive() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

	const toGetTotalPrice = document.getElementById('total-price');
	const totalPrice = totalSit * 550;
	toGetTotalPrice.innerText = totalPrice;

	const selectFiveButton = document.getElementById('sit-five');
	selectFiveButton.classList.add('bg-[#1DD100]');

	const selectSitNumber = document.getElementById('select-sit-num');
	const seeText = selectSitNumber.innerText;
	const sit = parseInt(seeText);
	const sitNumber = sit + 1;
	selectSitNumber.innerText = sitNumber;

	const reminderSitNumber = document.getElementById('remider-sit');
	const remiderNumber = reminderSitNumber.innerText;
	const remidersit = parseInt(remiderNumber);
	const remider = remidersit - 1;
	reminderSitNumber.innerText = remider;

	const showTicket = document.getElementById('show-ticket');
	const p = document.createElement('p');
	p.textContent = `B1-------------------------  economy  ----------------------550`;
	showTicket.appendChild(p);
}

function selectSitSix() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

	const toGetTotalPrice = document.getElementById('total-price');
	const totalPrice = totalSit * 550;
	toGetTotalPrice.innerText = totalPrice;

	const selectSixButton = document.getElementById('sit-six');
	selectSixButton.classList.add('bg-[#1DD100]');

	const selectSitNumber = document.getElementById('select-sit-num');
	const seeText = selectSitNumber.innerText;
	const sit = parseInt(seeText);
	const sitNumber = sit + 1;
	selectSitNumber.innerText = sitNumber;

	const reminderSitNumber = document.getElementById('remider-sit');
	const remiderNumber = reminderSitNumber.innerText;
	const remidersit = parseInt(remiderNumber);
	const remider = remidersit - 1;
	reminderSitNumber.innerText = remider;

	const showTicket = document.getElementById('show-ticket');
	const p = document.createElement('p');
	p.textContent = `B2-------------------------  economy  ----------------------550`;
	showTicket.appendChild(p);
}

function selectSitSeven() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

	const toGetTotalPrice = document.getElementById('total-price');
	const totalPrice = totalSit * 550;
	toGetTotalPrice.innerText = totalPrice;

	const selectSixButton = document.getElementById('sit-seven');
	selectSixButton.classList.add('bg-[#1DD100]');

	const selectSitNumber = document.getElementById('select-sit-num');
	const seeText = selectSitNumber.innerText;
	const sit = parseInt(seeText);
	const sitNumber = sit + 1;
	selectSitNumber.innerText = sitNumber;

	const reminderSitNumber = document.getElementById('remider-sit');
	const remiderNumber = reminderSitNumber.innerText;
	const remidersit = parseInt(remiderNumber);
	const remider = remidersit - 1;
	reminderSitNumber.innerText = remider;

	const showTicket = document.getElementById('show-ticket');
	const p = document.createElement('p');
	p.textContent = `B3-------------------------  economy  ----------------------550`;
	showTicket.appendChild(p);
}

function selectSitEight() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

	const toGetTotalPrice = document.getElementById('total-price');
	const totalPrice = totalSit * 550;
	toGetTotalPrice.innerText = totalPrice;

	const selectSixButton = document.getElementById('sit-eight');
	selectSixButton.classList.add('bg-[#1DD100]');

	const selectSitNumber = document.getElementById('select-sit-num');
	const seeText = selectSitNumber.innerText;
	const sit = parseInt(seeText);
	const sitNumber = sit + 1;
	selectSitNumber.innerText = sitNumber;

	const reminderSitNumber = document.getElementById('remider-sit');
	const remiderNumber = reminderSitNumber.innerText;
	const remidersit = parseInt(remiderNumber);
	const remider = remidersit - 1;
	reminderSitNumber.innerText = remider;

	const showTicket = document.getElementById('show-ticket');
	const p = document.createElement('p');
	p.textContent = `B4-------------------------  economy  ----------------------550`;
	showTicket.appendChild(p);
}
