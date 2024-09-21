let quote = document.getElementById('quote')
let author = document.getElementById('author')
let nextBtn = document.getElementById('nextBtn')
let container = document.querySelector('.container')

const url = 'https://random-quote-api3.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '838d0a1d2dmsh64fa893a90c03dap1e76bdjsn554143922e76',
		'x-rapidapi-host': 'random-quote-api3.p.rapidapi.com'
	}
};
async function run(){
	container.classList.add('rotate')
	setTimeout(() => {
		container.classList.remove('rotate')
	},100);

	const response = await fetch(url, options);
	const result = await response.json();
    quote.innerHTML = '"'+result.quote+'"'
    author.innerHTML = "~ "+result.author 
} 

nextBtn.addEventListener('click',run)
run()