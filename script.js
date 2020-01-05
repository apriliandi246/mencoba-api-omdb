$.ajax({
      url: 'http://www.omdbapi.com/?apikey=80dfc363&s=avengers',
      success: results => {
            const movies = results.Search;
            let cards = "";
            console.log(movies);

            movies.forEach(m => {
                  cards += `
                        <div class="col-md-4 my-5">
                              <div class="card">
                                    <img class="card-img-top" src="${m.Poster}" alt="movie-poster">
                                    <div class="card-body">
                                          <h5 class="card-title">${m.Title}</h5>
                                          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                          <a href="#" class="btn btn-primary">Show Details</a>
                                    </div>
                              </div>
                        </div>
                  `;
            });

            $('.movie-container').html(cards);

      },
      error: (err) => {
            console.log(err.reponseText);
      }
});