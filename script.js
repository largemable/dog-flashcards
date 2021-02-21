// console.log('hello world')
let dogApi = 'https://api.thedogapi.com/v1/breeds';
// let dogApi = 'https://api.thedogapi.com/v1/images/search';
let dogImage = document.querySelector('#dog-image');
let button = document.querySelector('a');
let p = document.querySelector('p');

dogImage.src = 'coooooooldog.jpg';

// generates a random dog

button.addEventListener('click', (event) => {
	p.innerText = '';
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
				// event.preventDefault();
				p.innerText = doge.name;
				// dogImage.innerHTML = doge.name;
			});
			// console.log(doge.breeds.name.length);
		})
		.catch((err) => console.log(err));
	// dogImage.src = res.url;
});

document.body.addEventListener('keydown', checkKeyPress, false);
function checkKeyPress(key) {
	if (key.keycode == '97') {
		console.log('hello from a');
	}
}

console.log('is this thing on?');

// generate a deck of ordered cards user can go back and forth between
// "save" cards or just remove the cards that user guesses right?
// multiple choice!
