function updateClock() {
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	var now = new Date();
	day = now.getDay();
	date = now.getDate();
	month = monthNames[now.getMonth()]
	year = now.getFullYear();
	hours = now.getHours();
	minutes = now.getMinutes();
	if (minutes < 10) {
		time = hours + ':' + "0" + minutes;
	} else {
		time = hours + ':' + minutes;
	}
	if (hours < 10) {
		time = "0" + time;
	}
	document.getElementById('time').innerHTML = time;
	document.getElementById('date').innerHTML = date;
	document.getElementById('month').innerHTML = month;
	document.getElementById('year').innerHTML = year;

	setTimeout(updateClock, 1000);
}

updateClock();