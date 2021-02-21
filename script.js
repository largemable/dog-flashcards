// console.log('hello world')
let dogApi = 'https://api.thedogapi.com/v1/breeds';
// let dogApi = 'https://api.thedogapi.com/v1/images/search';
let dogImage = document.querySelector('#dog-image');
let button = document.querySelector('button');
let p = document.querySelector('p');

dogImage.src = 'dogtest.jpg';

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
			});
			// console.log(doge.breeds.name.length);
		})
		.catch((err) => console.log(err));
	// dogImage.src = res.url;
});
