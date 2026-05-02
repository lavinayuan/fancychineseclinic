function toggleMenu(action) {
	const nav = document.getElementById('header-navigation');
	const closeIco = document.getElementById('close-ico');

	if (action === 'open') {
		nav.classList.add('open');
		closeIco.style.display = 'block';
	} else {
		nav.classList.remove('open');
		closeIco.style.display = 'none';
	}
}

// The following code fixes mobile menu that automatically closes when a link is clicked. 
document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('#header-navigation a');

	links.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			const target = document.querySelector(targetId);

			toggleMenu('close');

			if (target) {
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
});