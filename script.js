// console.log('hello world')
let dogApi = 'https://api.thedogapi.com/v1/breeds';
// generates a random dog
let dogImage = document.querySelector('#dog-image');
let button = document.querySelector('a');
let p = document.querySelector('#instructions');

button.addEventListener('click', (event) => {
	button.innerText = 'next';
	p.innerText = 'Click image to reveal breed!';
	event.preventDefault();
	console.log('you clicked doggy');
	fetch(dogApi, {})
		.then((res) => res.json())
		.then((res) => {
			let i = Math.ceil(Math.random() * 172);
			console.log(res[i]);
			let doge = res[i];
			dogImage.src = doge.image.url;
			dogImage.addEventListener('click', (event) => {
				event.preventDefault();
				p.innerText = doge.name;
			});
			document.addEventListener('keydown', (event) => {
				event.preventDefault();
				if (event.key === ' ') {
					p.innerText = doge.name;
				}
			});
		})
		.catch((err) => console.log(err));
});

document.addEventListener('keydown', (event) => {
	event.preventDefault();
	console.log('you clicked doggy');
	if (event.key === 'ArrowRight') {
		p.innerText = 'Click image to reveal breed!';
		fetch(dogApi, {})
			.then((res) => res.json())
			.then((res) => {
				let i = Math.ceil(Math.random() * 172);
				console.log(res[i]);
				let doge = res[i];
				dogImage.src = doge.image.url;
				document.addEventListener('keydown', (event) => {
					event.preventDefault();
					if (event.key === ' ') {
						p.innerText = doge.name;
					}
				});
			})
			.catch((err) => console.log(err));
	}
});

// generate a deck of ordered cards user can go back and forth between
// "save" cards or just remove the cards that user guesses right?
// multiple choice!

// document.addEventListener('keydown', function onPress(event) {
// 	if (event.key === 'ArrowRight') {
// 		console.log('right');
// 	} else if (event.key === 'ArrowLeft') {
// 		console.log('left');
// 	}
// });
