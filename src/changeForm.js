const currentlyForm = document.querySelectorAll('form');
const currentlyButton = document.querySelectorAll('button');

export const changeForm = (formName, btnName) => {
	currentlyForm.forEach((form) => {
		form.style.display = 'none';
	});

	currentlyButton.forEach((btn) => {
		btn.style.background  = 'lightgrey';
	});

	formName.style.display = 'block';
	btnName.style.background  = 'lime';
};
