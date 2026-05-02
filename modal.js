// Open modal
		document.querySelectorAll('.service a').forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			const modalId = this.getAttribute('data-modal');
			document.getElementById(modalId).classList.add('active');
		});
	});

// Close modal (X)
		document.querySelectorAll('.close').forEach(btn => {
		btn.addEventListener('click', function() {
			this.closest('.overlay').classList.remove('active');
		});
	});

// Close on outside click
		document.querySelectorAll('.overlay').forEach(overlay => {
		overlay.addEventListener('click', function(e) {
			if (e.target === this) {
			this.classList.remove('active');
			}
		});
	});