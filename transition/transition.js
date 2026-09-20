(() => {
	const transitionSelector = '[data-transition-root]';
	let isLeaving = false;

	const createTransition = () => {
		const root = document.createElement('div');
		root.className = 'page-transition is-transitioning';
		root.setAttribute('data-transition-root', '');
		root.setAttribute('aria-hidden', 'true');
		root.innerHTML = `
			<div class="page-transition__bar page-transition__bar--top"></div>
			<div class="page-transition__bar page-transition__bar--bottom"></div>
		`;
		document.body.appendChild(root);
		return root;
	};

	const transition = document.querySelector(transitionSelector) || createTransition();
	transition.classList.add('is-transitioning');
	document.documentElement.classList.add('transition-ready');

	const getDuration = () => {
		const bar = transition.querySelector('.page-transition__bar');
		const duration = parseFloat(getComputedStyle(bar).transitionDuration) * 1000;
		return Number.isFinite(duration) ? duration : 900;
	};

	const open = () => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				transition.classList.add('is-open');
				window.setTimeout(() => {
					transition.classList.remove('is-transitioning');
				}, getDuration());
			});
		});
	};

	const shouldHandleLink = (event, link) => {
		if (
			event.defaultPrevented ||
			event.button !== 0 ||
			event.metaKey ||
			event.ctrlKey ||
			event.shiftKey ||
			event.altKey ||
			link.target === '_blank' ||
			link.hasAttribute('download') ||
			link.dataset.transition === 'none'
		) {
			return false;
		}

		const destination = new URL(link.href, window.location.href);
		return (
			destination.origin === window.location.origin &&
			destination.pathname !== window.location.pathname
		);
	};

	const leave = (url) => {
		if (isLeaving) {
			return;
		}

		isLeaving = true;
		transition.classList.add('is-transitioning');
		transition.classList.remove('is-open');

		window.setTimeout(() => {
			window.location.assign(url);
		}, getDuration());
	};

	document.addEventListener('click', (event) => {
		const link = event.target instanceof Element ? event.target.closest('a') : null;

		if (!link || !shouldHandleLink(event, link)) {
			return;
		}

		event.preventDefault();
		leave(link.href);
	});

	window.siteTransition = { leave };
	open();
})();
