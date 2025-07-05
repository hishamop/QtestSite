// Modal functionality
function openModal(modalId) {
	document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
	document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
	const modals = document.getElementsByClassName('modal');
	for (let i = 0; i < modals.length; i++) {
		if (event.target === modals[i]) {
			modals[i].style.display = 'none';
		}
	}
}

// Form submissions
document.getElementById('contactForm').addEventListener('submit', function(e) {
	e.preventDefault();
	alert('Thank you for your message! We will get back to you soon.');
	this.reset();
});

document.getElementById('trainingForm').addEventListener('submit', function(e) {
	e.preventDefault();
	alert('Thank you for booking training! We will contact you within 24 hours to confirm your enrollment.');
	this.reset();
	closeModal('trainingModal');
});

document.getElementById('serviceForm').addEventListener('submit', function(e) {
	e.preventDefault();
	alert('Thank you for your service request! We will review your requirements and send you a detailed quote within 48 hours.');
	this.reset();
	closeModal('serviceModal');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
});
