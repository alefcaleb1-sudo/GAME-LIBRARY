const searchInput = document.getElementById("game-search");


const gameCards = document.querySelectorAll(".game-card");


searchInput.addEventListener('input', function() {
    console.log(searchInput.value);

});

gameCards.forEach(function(card) {
    console.log(card.querySelector("h3").textContent);

});


const gameDetails = document.getElementById("game-details");

const gameTitle = document.getElementById("game-title");

const gameDescription = document.getElementById("game-description");

const backButton = document.getElementById("back-button");

const homeSection = document.getElementById("home-section");

const gameStory = document.getElementById("game-story");

const gameItems = document.getElementById("game-items");

const gameMobs = document.getElementById("game-mobs");

const gameSecrets = document.getElementById("game-secrets");

const gameData = {
    "Minecraft": {
        description: "Minecraft é um jogo de mundo aberto em que você explora, coleta recursos, constrói estruturas e enfrenta desafios usando sua criatividade.",

        story: "O jogador começa em um mundo aberto e pode explorar diferentes ambientes, reunir recursos e sobreviver. A aventura não precisa seguir uma única história.",

        items: [
            "Picareta: usada para minerar.",
            "Espada: usada em combates.",
            "Mesa de trabalho: permite fabricar objetos.",
            "Tocha: ilumina ambientes escuros.",
            "Diamante: recurso usado para fabricar equipamentos."
        ],

        mobs: [
            "Creeper: explode perto do jogador.",
            "Zumbi: inimigo que aparece em condições de pouca luz.",
            "Esqueleto: ataca com arco.",
            "Enderman: criatura capaz de se teleportar.",
            "Aldeão: personagem que pode negociar com o jogador."
        ],

        easterEggs: [
            "O nome Dinnerbone deixa várias criaturas de cabeça para baixo.",
            "O disco musical 11 é conhecido por seu som misterioso."
        ]
    }
};

backButton.addEventListener("click", function() {
    gameDetails.style.display = "none";
    homeSection.style.display = "block";
});

gameCards.forEach(function(card) {
    card.addEventListener("click", function() {


        const title = card.querySelector("h3").textContent;
       const data = gameData[title];

       if (!data) {
            console.log("Dados ainda não cadastrados", title);
            return;
        }

        homeSection.style.display = "none";
        gameDetails.style.display = "block";

        gameTitle.textContent = title;
        gameDescription.textContent = data.description;
        gameStory.textContent = data.story;


        gameItems.innerHTML = "";
        data.items.forEach(function(item) {
            const p = document.createElement("p");
            p.textContent = item;
            gameItems.appendChild(p);
        });
        gameMobs.innerHTML = "";
        data.mobs.forEach(function(mob) {
            const p = document.createElement("p");
            p.textContent = mob;
            gameMobs.appendChild(p);
        });

        console.log("Jogo escolhido:", title);
        console.log("Descrição do jogo:", data.description);

    });
});
