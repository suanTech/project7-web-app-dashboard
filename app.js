const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const bellBtn = document.querySelector('.bell');
const notification = document.querySelector('.notification-btn');
const notificationDot = document.getElementById('notification-dot');
const dropdownCont = document.getElementById('dropdown-box');
const trafficNav = document.querySelector('.traffic-nav');


// Notification button 
notification.addEventListener('click',(e) => {
	const btn = e.target;
	if (btn.classList.contains('bell')) {
		bellBtn.style.transform = 'scale(1.2) rotate(10deg)';
		if (dropdownCont.style.display === 'block') {
			dropdownCont.style.display = 'none';
			bellBtn.style.transform = 'scale(1) rotate(0)';
		} else {
		dropdownCont.style.display = 'block';
		}
	}
});

// Dropdown disappear when click messages 
dropdownCont.addEventListener('click', (e) => {
	const element = e.target;
	if (element.classList.contains('close-btn')) {
		dropdownCont.style.display = 'none';
		notificationDot.style.opacity = '0';
		bellBtn.style.transform = 'scale(1) rotate(0)';
	}
});

// Alert banner 
alertBanner.innerHTML = `
	<p><strong>Alert:</strong> You have unread messages</p>
	<p class="close-btn">x</p>
`
alertBanner.addEventListener('click', (e) => {
	const element = e.target;
	if (element.classList.contains('close-btn')) {
		alertBanner.classList = 'isHidden';
	}
});


// Chart 1 - line
// --- initial chart data
let trafficData = {
	labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '16-24', '25-31'],
	datasets: [{
		data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
		borderColor: 'rgba(141, 123, 112, 0.7)',
		pointRadius: '3',
		borderWidth: '1',
		tension: '.5'
	}]
};
const trafficOptions = {
	backgroundColor: 'rgba(111, 109, 105, 0.4)',
	fill: true,
	aspectRatio: 2.5,
	animation: {
		duration: 400,
		easing: 'easeOutQuart'
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
let trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: trafficData,
	options: trafficOptions
});

// --- create new chart function
function newChart(chart, labels, data) {
	chart.data.labels = labels;
	chart.data.datasets[0].data = data;
	chart.update();
}

// --- active button changes graph
trafficNav.addEventListener('click', (e) => {
	const btn = e.target;
	const li = document.getElementsByClassName('traffic-link');
	for (i = 0; i < li.length; i++) {
		li[i].classList.remove('active');
	}
	if(btn.classList.contains('traffic-link')) {
		btn.classList.add('active');
	};
	if (btn.textContent === 'Weekly') {
		let labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '16-24', '25-31'];
		let data = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
		newChart(trafficChart, labels, data);
	} else if (btn.textContent === 'Daily') {
		let labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		let data = [150, 75, 200, 175, 200, 250, 275];
		newChart(trafficChart, labels, data);
	} else if (btn.textContent === 'Hourly') {
		let labels = ['0-4', '4-8', '8-12', '12-16', '16-20', '20-24'];
		let data = [5, 15, 25, 20, 25, 15];
		newChart(trafficChart, labels, data);
	} else if (btn.textContent === 'Monthly') {
		let labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'];
		let data = [3000, 3750, 4000, 3250, 4250, 3250, 2750, 3000, 4000, 3750, 3500, 3500];
		newChart(trafficChart, labels, data);
	};
});

// Chart 2 - bar
const dailyData = {
	labels: [	'S', 'M',	'T', 'W',	'T', 'F', 'S'],
	datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		borderColor: '#77b3b8',
		backgroundColor: 'rgba(119, 179, 184, 0.7)',
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
};
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
			'rgba(119, 179, 184, 0.7)',
			'rgba(172, 103, 167, 0.7)',
			'rgba(111, 109, 105, 0.7)'
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
};
const mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});