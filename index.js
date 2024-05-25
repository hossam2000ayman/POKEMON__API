// fetch = Function used for making HTTP requests to Fetch resources.
//         (JSON style data, images, files)
//          Simplifies asynchronous data fetching in Javascript and
//          used for interacting with APIs to retrieve and send
//          data synchronously over the web
//          fetch(url,{options})
//          fetch(resource,{method: "GET"}) //(DEFAULT)
//          fetch(resource,{method: "POST"})
//          fetch(resource,{method: "PUT"})
//          fetch(resource,{method: "DELETE"})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not feth resource");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.error(error));

//if you prefer to use an async / await

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const imgElement = document.getElementById("pokemonSprite");

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    ); // return promise
    const errorMessage = document.getElementById("errorMessage");
    if (!response.ok) {
      errorMessage.textContent = "This name was not found";
      imgElement.src = "";
      imgElement.style.display = "none";
      throw new Error("Could not fetch the resource");
    }
    errorMessage.textContent = "";

    const data = await response.json(); //return promise
    console.log(data);
    const pokemeonSprite = data.sprites.front_default;
    imgElement.src = pokemeonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
