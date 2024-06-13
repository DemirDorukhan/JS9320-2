// JSON verisi
const data = {
    "characters": [
{
"id": 1,
"name": "Luke Skywalker",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
"homeworld": "tatooine"
},
{
"id": 2,
"name": "C-3PO",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
"homeworld": "tatooine"
},
{
"id": 3,
"name": "R2-D2",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
"homeworld": "naboo"
},
{
"id": 4,
"name": "Darth Vader",
"pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
"homeworld": "tatooine"
},
{
"id": 5,
"name": "Leia Organa",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
"homeworld": "alderaan"
},
{
"id": 6,
"name": "Owen Lars",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
"homeworld": "tatooine"
},
{
"id": 7,
"name": "Beru Whitesun lars",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
"homeworld": "tatooine"
},
{
"id": 8,
"name": "R5-D4",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
"homeworld": "tatooine"
},
{
"id": 9,
"name": "Biggs Darklighter",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
"homeworld": "tatooine"
},
{
"id": 10,
"name": "Obi-Wan Kenobi",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
"homeworld": "stewjon"
},
{
"id": 11,
"name": "Anakin Skywalker",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
"homeworld": "tatooine"
},
{
"id": 12,
"name": "Wilhuff Tarkin",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
"homeworld": "eriadu"
},
{
"id": 13,
"name": "Chewbacca",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
"homeworld": "kashyyyk"
},
{
"id": 14,
"name": "Han Solo",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
"homeworld": "corellia"
},
{
"id": 15,
"name": "Greedo",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
"homeworld": "Rodia"
},
{
"id": 16,
"name": "Jabba Desilijic Tiure",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
"homeworld": "tatooine"
},
{
"id": 18,
"name": "Wedge Antilles",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
"homeworld": "corellia"
},
{
"id": 19,
"name": "Jek Tono Porkins",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
"homeworld": "bestine"
},
{
"id": 20,
"name": "Yoda",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
},
{
"id": 21,
"name": "Palpatine",
"pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
"homeworld": "naboo"
}
]
};

// Create Homeworlds Array
const homeworldsRaw = data.characters.map(character => character.homeworld ?? "other");

// Make the elements of the homeworlds array lowercase
const homeworlds = [...new Set(homeworldsRaw.map(hw => hw.toLowerCase()))];

// Homeworldless
function filterCharacters(homeworld) {
    return data.characters.filter(character => (character.homeworld ?? "other").toLowerCase() === homeworld);
}

// Creating Radio Button
const radioButtonsContainer = document.getElementById('radioButtonsContainer');
function createRadioButtons() {
    homeworlds.forEach(homeworld => {
        const radio = document.createElement('div');
        radio.classList.add('form-check', 'form-check-inline');
        radio.innerHTML = `
            <input class="form-check-input" type="radio" name="homeworldRadio" id="${homeworld}" value="${homeworld}">
            <label class="form-check-label" for="${homeworld}">${homeworld}</label>
        `;
        radioButtonsContainer.appendChild(radio);
    });
}

// Create Cards and Add to CardContainer
const cardContainer = document.getElementById('cardContainer');
function createCards(filteredCharacters) {
    cardContainer.innerHTML = ''; 
    filteredCharacters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('col', 'mb-4');
        card.innerHTML = `
            <div class="card">
                <img src="${character.pic}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">Homeworld: ${character.homeworld ?? "other"}</p>
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}

// Button
let isVisible = false;
document.getElementById('toggleButton').addEventListener('click', () => {
    isVisible = !isVisible;
    if (isVisible) {
        cardContainer.style.display = 'flex';
        radioButtonsContainer.style.display = 'flex';
        document.getElementById('toggleButton').innerText = 'Hide Characters';
    } else {
        cardContainer.style.display = 'none';
        radioButtonsContainer.style.display = 'none';
        document.getElementById('toggleButton').innerText = 'Show Characters';
    }
});

// Make hide card container and radio buttons
cardContainer.style.display = 'none';
radioButtonsContainer.style.display = 'none';

// Radio button
radioButtonsContainer.addEventListener('change', (event) => {
    const selectedHomeworld = event.target.value;
    const filteredCharacters = filterCharacters(selectedHomeworld);
    createCards(filteredCharacters);
});

createRadioButtons();
createCards(data.characters);