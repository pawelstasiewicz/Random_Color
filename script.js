let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let btn = document.querySelector('#btn');
let cl = document.querySelector('#span_color');

btn.addEventListener('click', function () {
	let draw = '#';

	for (let i = 0; i < 6; i++) {
		draw += color[randomNumber()];
	}

	cl.textContent = draw;
	document.body.style.backgroundColor = draw;
});

function randomNumber() {
	return Math.floor(Math.random() * color.length);
}
