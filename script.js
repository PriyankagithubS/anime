document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://nekos.best/api/v2/neko";
    const animeContainer = document.getElementById("anime-container");
    const nextButton = document.getElementById("next-button");

    function fetchAnime() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayAnime(data.results[0]);
            })
            .catch(error => console.error('Error fetching anime data:', error));
    }

    function displayAnime(anime) {
        animeContainer.innerHTML = ''; // Clear previous content

        const animeCard = document.createElement("div");
        animeCard.className = "col-md-12 anime-card";

        animeCard.innerHTML = `
            <div class="card">
                <img src="${anime.url}" class="card-img-top" alt="Anime Image">
                <div class="card-body">
                    <h5 class="card-title">Anime</h5>
                    <p class="card-text">Click the button below to see the next anime!</p>
                </div>
            </div>
        `;

        animeContainer.appendChild(animeCard);

        // Adjust image size to fit the screen
        const imgElement = animeCard.querySelector('.card-img-top');
        imgElement.style.width = '100%'; // Set image width to 100% of container width
        imgElement.style.height = 'auto'; // Maintain aspect ratio
    }

    // Fetch the first anime image on page load
    fetchAnime();

    // Fetch a new anime image when the button is clicked
    nextButton.addEventListener("click", fetchAnime);
});
