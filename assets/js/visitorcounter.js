const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://swlf3akfd6zh3d42g75z7pmfza0jisok.lambda-url.ap-southeast-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = `PAGE VIEWS: ${data}`;
}

updateCounter();