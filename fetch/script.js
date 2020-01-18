// fetch




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