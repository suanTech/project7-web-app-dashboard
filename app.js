const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');

alertBanner.innerHTML = `
	<p><strong>Alert:</strong> You have unread messages</p>
	<p class="close-btn">x</p>
`
alertBanner.className += ' button-box'

// alert banner disappear when clicked
alertBanner.addEventListener('click', e => {
	const element = e.target;
	if (element.classList.contains('close-btn')) {
		alertBanner.style.display = 'none';
	}
})

// Chart 1 - line
const trafficData = {
	labels: [	'16-22', '23-29',	'20-5', '6-12',	'13-19', '20-26', '27-3', '4-10', '11-17', '16-24', '25-31'],
	datasets: [{
		data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
		borderColor: 'rgba(96, 189, 255, 0.7)',
		pointRadius: '3',
		borderWidth: '1',
		tension: '.5',
	}]
}

const trafficOptions = {
	backgroundColor: 'rgba(168, 217, 251, 0.4)',
	fill: true,
	aspectRatio: 2.5,
	animation: {
		duration: 0
	},
	layout: {
		autoPadding: false
	},
	scales: {
		y: {
			beginAtZero: true
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
};

const trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: trafficData,
	options: trafficOptions
});

// Chart 2 - bar
const dailyData = {
	labels: [	'S', 'M',	'T', 'W',	'T', 'F', 'S'],
	datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		borderColor: '#0096FF',
		backgroundColor: 'rgba(0, 150, 255, 0.7)',
		borderWidth: '1',
	}]
};

const dailyOptions = {
	scales: {
		y: {
			beginAtZero: true
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
}

const dailyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions
});

// Chart 3 - doughnut
const mobileData = {
	labels: [	'Desktop', 'Tablet',	'Phones'],
	datasets: [{
		label: '# of Users',
		data: [2000, 550, 500],
		backgroundColor: [
			'rgba(0, 150, 255, 0.7)',
			'rgba(234, 134, 59, 0.7)',
			'rgba(226, 159, 194, 0.7)'
		],
		borderWidth: 0,
	}]
};

const mobileOptions = {
	aspectRatio: 1.9,
	plugins: {
		legend: {
			position: 'right',
			labels: {
				boxWidth: 20,
				fontStyle: 'bold'
			}
		}
	}
}

const mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});