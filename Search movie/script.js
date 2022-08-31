const apiURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const searchAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const imgPATH = "https://image.tmdb.org/t/p/w1280";

getMovie(apiURL);
const form = document.querySelector("form");
async function getMovie(url) {
    const res = await fetch(url);
    const data = await res.json();
    
    let movies = data.results;
    console.log(movies);   
    displayMovie(movies)
}
let move = document.querySelector(".movies");
function displayMovie(movies) {
    move.innerHTML = "";
    for (let index = 0; index < movies.length; index++) {
        const eachMovie = movies[index];
        let img ;
        if(eachMovie.backdrop_path){
            img = imgPATH + eachMovie.backdrop_path;
        }
        else{
            img = "./random.jpg";
        }
        let overview;
        if(eachMovie.overview){
            overview = eachMovie.overview;
        }
        else{
            overview ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt vero autem, accusantium adipisci porro totam in, laboriosam fugit voluptas voluptatum iusto, reprehenderit maxime fugiat? Maxime quas consequatur doloribus doloremque cupiditate?"
        }
        let html = `<div class="movie">
                        <img src="${img}" alt="movies image">
                        <div class="texts">
                            <h3>${eachMovie.title}</h3>
                            <hr>
                            <h3 class="rate">Rating: <span>${eachMovie.vote_average}</span></h3>
                            <p class="overview">${overview}</p>
                        </div>
                    </div>`
       move.innerHTML += html;
        
    } 
}
const inputs = document.querySelector(".input");
form.addEventListener("submit", (e) => {
    e.preventDefault();
     move.innerHTML = ""
    const searchMovie = inputs.value;
    if (searchMovie) {
        getMovie(searchAPI + searchMovie);
        inputs.value = "";
    }
});



window.addEventListener("resize", () => {
    console.log(window.innerWidth);
})