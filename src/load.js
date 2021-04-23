const checkElement = (src) => {
	const scripts = document.getElementsByName('script');
	scripts.forEach((script) => {
		if (script.src = src) {
			return true;
		}
	})
	return false;
};

const loadScript = (args, callback = null) => {
	if (Array.isArray(args)) {
		args.forEach((src)=>{
			if (checkElement(src)) {
				const el = document.createElement('script');
				el.src = src;
				el.type = 'text/javascript';
				if (callback) (
					el.addEventListener(callback)
				)
				document.body.appendChild(el); 
			}
		})
	};
};