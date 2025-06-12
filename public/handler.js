function updateClock() {
	const now = new Date();
	const hh = String(now.getHours()).padStart(2, "0");
	const mm = String(now.getMinutes()).padStart(2, "0");
	let clocks = document.querySelectorAll(".clock")

	clocks.forEach(clock => {
		let effect = clock.getAttribute("effect")

		if (effect == "ghost") {
			clock.textContent = `${hh[0]}:${mm}`;
			clock.innerHTML = `<span class="g-l-0">${hh[0]}</span><span class="g-l-1">${hh[1]}</span><span class="colon">:</span><span class="g-l-0">${mm[0]}</span><span class="g-l-1">${mm[1]}</span>`;
		} else {
			clock.textContent = `${hh}:${mm}`;
		}
		

	});
}

function updateDate() {
	const now = new Date();

	const dni = ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'];
	const miesiace = [
		'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
		'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'
	];

	const dzienTygodnia = dni[now.getDay()];
	const dzien = now.getDate();
	const miesiac = miesiace[now.getMonth()];
	const rok = now.getFullYear();

	const sformatowanaData = `${dzienTygodnia}, ${dzien} ${miesiac} ${rok}`;

	document.getElementById('date').textContent = sformatowanaData;
}

async function fetchNotif() {
	const res = await fetch("/api/last");
	const data = await res.json();
	document.getElementById("notif").textContent = `${data.app}: ${data.title}`;
}

let accent = document.getElementById("accent")

accent.addEventListener("input", (e) => {
	const accent = e.target.value;
	document.documentElement.style.setProperty('--accent-color', accent);
})



setInterval(updateClock, 1000);
setInterval(updateDate, 1000);
// setInterval(fetchNotif, 3000);
updateClock();
// fetchNotif();
