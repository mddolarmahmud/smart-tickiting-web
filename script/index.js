var totalSit = 0;

function toShowBuyTicket() {
	const pParibahan = document.getElementById('p-paribahan');
	pParibahan.classList.remove('hidden');
}

// function toSiteNoOneSelect() {
// 	getSingleSit('toChange-color');
// 	getSingleSit('secound');
// }

// function getSingleSit(elementId) {
// 	const setBackgroundColor = document.getElementById(elementId);
// 	setBackgroundColor.classList.add('bg-[#1DD100]');
// }

function toSiteNoOneSelect() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;
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
}

function buttonTwo() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;
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
}
function toSelectThree() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;
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
}
function toSelectFour() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;
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
}
function selectSitFive() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;
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
}

function selectSitSix() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

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
}

function selectSitSeven() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

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
}

function selectSitEight() {
	if (totalSit >= 4) {
		alert('can not select more sit');
		return;
	}
	totalSit++;

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
}
