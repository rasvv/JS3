const loadScript = (src, callback) => {
	if (src != null) {
    	const el = document.createElement('script');
    	el.src = src;
    	el.type = 'text/javascript';
    	document.body.appendChild(el); 
	 	el.onload = callback;
		document.body.insertAdjacentHTML('beforeend', `<div>.</div>`)
	}
};