const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://mwbc5f46uohj6h4yk2heyqww7q0gknpv.lambda-url.ap-southeast-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = `PAGE VIEWS: ${data}`;
}

updateCounter();