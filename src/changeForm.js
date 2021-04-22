const currentlyForm = document.querySelectorAll('form');

export const changeForm = (formName) => {
	currentlyForm.forEach((form) => {
		form.style.display = 'none';
	})
	formName.style.display = 'block';
};
