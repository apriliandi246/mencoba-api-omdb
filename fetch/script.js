// fetch
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function () {
      const inputKeyword = document.querySelector('.input-keyword');

      fetch('http://www.omdbapi.com/?apikey=80dfc363&s=' + inputKeyword.value)
            .then(response => response.json())
            .then(response => {
                  const movies = response.Search;
                  let cards = '';

                  movies.forEach(m => {
                        cards += showCards(m);
                  });

                  const movieContainer = document.querySelector('.movie-container');

                  movieContainer.innerHTML = cards;

                  // ketika tombol detail movie diklik
                  const modalDetailButton = document.querySelectorAll('.modal-detail-button');
                  modalDetailButton.forEach(btn => {
                        btn.addEventListener('click', function () {
                              const imdbid = this.dataset.imdbid;

                              fetch('http://www.omdbapi.com/?apikey=80dfc363&i=' + imdbid)
                                    .then(response => response.json())
                                    .then(m => {
                                          const movieDetail = showMovieDetail(m);
                                          const modalBody = document.querySelector('.modal-body');

                                          modalBody.innerHTML = movieDetail;
                                    });
                        });
                  });
            })
});


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


function movieNotFound() {
      return `
            <div class="container">
                  <div class="row mt-5">
                        <div class="col-md">
                              <h1 class="text-center">Movie not found</h1>
                        </div>
                  </div>
            </div>
      `;
}