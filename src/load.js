const loadScript = (src, callback) => {
	if (src != null) {
    const el = document.createElement('script');
    el.src = src;
    el.type = 'text/javascript';
    el.onload = callback;

    document.head.appendChild(el);
	}
};


