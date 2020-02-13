import React, { Component } from "react";

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
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <header>
          <h2>{movie.Title}</h2>
        </header>
        <section>
          <img src={movie.Poster} alt="Movie art" />
        </section>
        <div>{movie.Plot}</div>
      </div>
    );
  }
}

export default Movie;
