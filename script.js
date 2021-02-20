// console.log('hello world')
let dogApi = 'https://api.thedogapi.com/v1/images/search';
let dogImage = document.querySelector('#dog-image');

dogImage.src = 'dogtest.jpg';

dogImage.addEventListener('click', (event) => {
	event.preventDefault();
	console.log('you clicked doggy');
	fetch(dogApi, {})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.log(err));
	// dogImage.src = res.url;
});
// grab image from api res
