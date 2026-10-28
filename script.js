const searchInput = document.getElementById('game-search');


const gameCards = document.querySelectorAll('.game-card');


searchInput.addEventListener('input', function() {
    console.log(searchInput.value);

});

gameCards.forEach(function(card) {
    console.log(card.querySelector("h3").textContent);

});
