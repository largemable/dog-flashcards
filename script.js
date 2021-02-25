
let dogApi = 'https://api.thedogapi.com/v1/breeds';
let dogImage = document.querySelector('#dog-image');
let button = document.querySelector('#start');
let p = document.querySelector('#instructions');
let dogArray = [];
let backButton = document.querySelector('#back');
backButton.style.display = 'none';

const displayDog = () => {
	p.innerText = currentDog.name;
	p.style.color = 'yellow';
	p.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
};

button.addEventListener('click', (event) => {
	event.preventDefault();
	button.innerText = 'next';
	backButton.style.display = 'block';
	p.innerText = 'Tap the image to reveal the breed!';
	p.style.color = 'black';
	p.style.textShadow = 'none';
	console.log('Clicked on button');
	fetch(dogApi, {})
		.then((res) => res.json())
		.then((res) => {
			let i = Math.ceil(Math.random() * 172);	
			let doge = res[i];
			dogArray.push(doge);
			currentDog = dogArray[dogArray.length - 1];
			dogImage.src = currentDog.image.url;
			dogImage.addEventListener('click', (event) => {
				event.preventDefault();
				displayDog();
			});
			document.addEventListener('keydown', (event) => {
				event.preventDefault();
				if (event.key === ' ') {
					displayDog();
				}
			});
		})
		.catch((err) => console.log(err));
});

backButton.addEventListener('click', (event) => {
	event.preventDefault;
	currentDog = dogArray[dogArray.indexOf(currentDog) - 1];
	dogImage.src = currentDog.image.url;
	displayDog();
});

document.addEventListener('keydown', (event) => {
	event.preventDefault();
	if (event.key === 'ArrowLeft') {
		event.preventDefault;
		currentDog = dogArray[dogArray.indexOf(currentDog) - 1];
		dogImage.src = currentDog.image.url;
		displayDog();
	}
	if (event.key === 'ArrowRight') {
		p.innerText = 'Tap the image to reveal the breed!';
		p.style.color = 'black';
		p.style.textShadow = 'none';
		fetch(dogApi, {})
			.then((res) => res.json())
			.then((res) => {
				let i = Math.ceil(Math.random() * 172);
				let doge = res[i];
				dogArray.push(doge);
				console.log(dogArray);
				currentDog = dogArray[dogArray.length - 1];
				dogImage.src = doge.image.url;
				dogImage.addEventListener('click', (event) => {
					event.preventDefault();
					displayDog();
				});
				document.addEventListener('keydown', (event) => {
					event.preventDefault();
					if (event.key === ' ') {
						displayDog();
					}
				});
			})
			.catch((err) => console.log(err));
	}
});
