import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      movie: null
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    fetch(`http://www.omdbapi.com/?apikey=81fbe921&type=movie&i=${id}`)
      .then(result => result.json())
      .then(movie => this.setState({ movie, loading: false }))
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    const { loading, error, movie } = this.state;
    if (movie) {
      console.log(movie);
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div id="movie-wrapper">
        <header id="movie-header">
          <h2 style={{ color: "white" }}>
            {movie.Title}, {movie.Year}
          </h2>
        </header>
        <section id="dashboard-grid">
          <div id="top-left">
            <img src={movie.Poster} alt="Movie art" />
          </div>
          {/* <div id="bottom-left"></div> */}
          <div id="top-right">
            <div id="movie-plot">{movie.Plot}</div>
            <div id="movie-details">
              <ul>
                <li>
                  <b>Rated:</b> {movie.Rated}
                </li>
                {movie.Type === "series" ? (
                  <li>
                    <b>Seasons:</b> {movie.totalSeasons}
                  </li>
                ) : null}
                <li>
                  <b>Runtime:</b> {movie.Runtime}
                </li>
                {movie.BoxOffice && movie.boxOffice !== null ? (
                  <li>
                    <b>Box Office:</b> {movie.BoxOffice}
                  </li>
                ) : null}
                <li>
                  <b>Released:</b> {movie.Released}
                </li>
                <li>
                  <b>Genre:</b> {movie.Genre}
                </li>
                <li>
                  <b>Director:</b> {movie.Director}
                </li>
                <li>
                  <b>Actors:</b> {movie.Actors}
                </li>
              </ul>
            </div>
            <div id="movie-ratings">
              {movie.Ratings && movie.Ratings[0] ? (
                <div className="ratings-wrapper">
                  <h2>{movie.Ratings[0].Value}</h2>
                  <h4>{movie.Ratings[0].Source}</h4>
                </div>
              ) : null}

              {movie.Ratings && movie.Ratings[1] ? (
                <div className="ratings-wrapper">
                  <h2>{movie.Ratings[1].Value}</h2>
                  <h4>{movie.Ratings[1].Source}</h4>
                </div>
              ) : null}
              {movie.Ratings && movie.Ratings[2] ? (
                <div className="ratings-wrapper">
                  <h2>{movie.Ratings[2].Value}</h2>
                  <h4>{movie.Ratings[2].Source}</h4>
                </div>
              ) : null}
            </div>
          </div>
          {/* <div id="bottom-right"></div> */}
        </section>
      </div>
    );
  }
}

export default Movie;
