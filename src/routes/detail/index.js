import { Component } from "preact";
import Axios from "../../config/axios";
import Navbar from "../../components/navbar";
import { Button } from "preact-fluid";

let movie_id = null;

class Detail extends Component {
  state = {
    movie: null
  };
  async componentDidMount() {
    const { data: movie } = await Axios.get(
      `/movie/${movie_id}?api_key=${process.env.PREACT_APP_API_KEY}`
    );
    this.setState({ movie });
  }
  render({ id }, { movie }) {
    movie_id = id;
    console.log(movie);
    return (
      <div>
        <Navbar />
        {this.state.movie && (
          <div
            style={{
              marginLeft: "15vw",
              marginRight: "15vw"
            }}
          >
            <h1 style={{ fontWeight: "100" }}>NOW PLAYING</h1>
            <span style={{ display: "flex", flexDirection: "row" }}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "20vw", height: "auto" }}
              />
              <div style={{ marginLeft: "5vw" }}>
                <h1 style={{ color: "#266", fontWeight: "500" }}>
                  {movie.title}
                </h1>
                <p>
                  {movie.genres.length > 0 ? "Genres" : "Genre"} :
                  {movie.genres.map(({ name }, index) =>
                    index + 1 === movie.genres.length ? ` ${name}` : ` ${name},`
                  )}
                </p>
                <p>
                  {movie.production_companies.length > 0
                    ? "Producers"
                    : "Producer"}{" "}
                  :
                  {movie.production_companies.map(
                    ({ name, origin_country }, index) =>
                      ` ${name}(${origin_country})${
                        index + 1 !== movie.production_companies.length
                          ? ","
                          : ""
                      }`
                  )}
                </p>
                {movie.homepage && (
                  <Button
                    style={{
                      marginLeft: "15vw",
                      width: "10vw",
                      backgroundColor: "#266",
                      color: "#ba7",
                      borderColor: "#ba7"
                    }}
                    onClick={() => window.open(movie.homepage)}
                  >
                    View In Web
                  </Button>
                )}
                <h2 style={{ fontWeight: "500" }}>SYNOPSIS</h2>
                <p>{movie.overview}</p>
              </div>
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Detail;
