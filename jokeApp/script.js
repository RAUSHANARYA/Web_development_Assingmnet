async function getNewJoke() {

    const API_URL = "https://official-joke-api.appspot.com/jokes/random";

    const response = await fetch(API_URL);

    const data = await response.json();

    console.log(data);

    document.getElementById("type").innerText = data.type;
    document.getElementById("setup").innerText = data.setup;
    document.getElementById("delivery").innerText = data.punchline;

  
  }

