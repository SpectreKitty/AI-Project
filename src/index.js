function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "713092c61foacbc30bt952afba0b4c71";
  let context =
    "You are a poem expert and love to write short poems. Your mission is to generate a poem that is always 4 lines in basic HTML, separate each line by <br />. Make sure to follow the user instructions. At the end of the poem  sign it with `SheCodes AI` inside a <strong> element in a seperate line than the poem.";
  let prompt = `User instructions:Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a poem about ${instructionsInput.value}</div>`;

  console.log(`Generating a poem`);
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
