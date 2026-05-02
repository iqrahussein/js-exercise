const fromLang =document.querySelector("#from-lang");
const toLang =document.querySelector("#to-lang");
const trans =document.querySelector(".btn-translate");
const input =document.querySelector("#text-input");
const output = document.querySelector("#output")

trans.addEventListener('click',async function(){
const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '4a4d1862d6mshce02f5655b67a8dp1a230cjsn8407d6d28add',
		'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		from: 'auto',
		to: toLang.value,
		text: input.value
	})
};
	console.log(fromLang.value)
		console.log(toLang.value)

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.trans);

	 displayDom(result.trans);

} catch (error) {
	console.error(error);
}

})

function displayDom(trans){
	 output.textContent = trans
}
