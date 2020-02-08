// async await
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', async function () {
      const inputKeyword = document.querySelector('.input-keyword');
      const movies = await getMovies(inputKeyword.value);
      updateUI(movies);
});


// event binding
document.addEventListener('click', async function (e) {
      if (e.target.classList.contains('modal-detail-button')) {
            const imdbid = e.target.dataset.imdbid;
            const movieDetail = await getMovieDetail(imdbid);
            updateUIDetail(movieDetail);
      }
});


async function getMovieDetail(imdbid) {
      let response = await fetch('http://www.omdbapi.com/?apikey=80dfc363&i=' + imdbid);
      return await response.json();
}


function updateUIDetail(m) {
      const movieDetail = showMovieDetail(m);
      const modalBody = document.querySelector('.modal-body');
      modalBody.innerHTML = movieDetail;
}


async function getMovies(keyword) {
      let response = await fetch('http://www.omdbapi.com/?apikey=80dfc363&s=' + keyword);
      let data = await response.json();
      return data.Search;
}


function updateUI(movies) {
      let cards = '';
      movies.forEach(m => cards += showCards(m));
      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = cards;
}


// fungsi menampilkan daftar film
function showCards(m) {
      return `
            <div class="col-md-4 my-4">
                  <div class="card">
                        <img class="card-img-top" src="${m.Poster}" alt="movie-poster">
                        <div class="card-body">
                              <h5 class="card-title">${m.Title}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                              <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                        </div>
                  </div>
            </div>
      `;
}


// fungsi menampilkan detail film
function showMovieDetail(m) {
      return `
            <div class="container-fluid">
                  <div class="row">
                        <div class="col-md-3">
                              <img src="${m.Poster}" class="img-fluid" alt="movie-poster">
                        </div>

                        <div class="col-md">
                              <ul class="list-group">
                                    <li class="list-group-item">
                                          <h4>${m.Title} (${m.Year})</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Director: </strong> ${m.Director}</li>
                                    <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                                    <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                                    <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                              </ul>
                        </div>
                  </div>
            </div
      `;
}