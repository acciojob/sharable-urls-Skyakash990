// your code here
function generateLink() {
	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;
	let url = document.getElementById("url");
	let baseUrl = "https://localhost:8080/";

	let finalUrl = baseUrl + `?name=${name}&year=${year}`;
	url.innerText = finalUrl;
	
}
