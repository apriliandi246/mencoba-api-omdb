$.ajax({
      url: 'http://www.omdbapi.com/?apikey=80dfc363&s=avengers',
      success: results => {

            const movies = results.Search;
            let cards = "";

            movies.forEach(m => {
                  cards += `
                        <div class="col-md-4 my-5">
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
            });

            $('.movie-container').html(cards);

            // ketika tombol detail diklik
            $('.modal-detail-button').on('click', function () {

                  // console.log($(this).data('imdbid'));

                  $.ajax({
                        url: 'http://www.omdbapi.com/?apikey=80dfc363&i=' + $(this).data('imdbid'),
                        success: m => {
                              console.log(m);
                              const movieDetail = `
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

                              $('.modal-body').html(movieDetail);
                        },
                        error: (err) => {
                              console.log(err.responseText);
                        }
                  });

            });

      },
      error: (err) => {
            console.log(err.reponseText);
      }
});