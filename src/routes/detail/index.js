import { Component } from "preact";
import Axios from "../../config/axios";
import Navbar from "../../components/navbar";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Icon
} from "preact-fluid";

let movie_id = null;

class Detail extends Component {
  state = {
    movie: null,
    reviews: []
  };
  async getDetail() {
    const { data: movie } = await Axios.get(
      `/movie/${movie_id}?api_key=${process.env.PREACT_APP_API_KEY}`
    );
    this.setState({
      movie
    });
  }
  async getReviews() {
    const {
      data: { results: reviews }
    } = await Axios.get(
      `/movie/${movie_id}/reviews?api_key=${process.env.PREACT_APP_API_KEY}`
    );
    this.setState({ reviews });
  }
  componentDidMount() {
    this.getDetail();
    this.getReviews();
  }
  render({ id }, { movie, reviews }) {
    movie_id = id;
    return (
      <div>
        <Navbar />{" "}
        {this.state.movie && (
          <div
            style={{
              marginLeft: "15vw",
              marginRight: "15vw"
            }}
          >
            <h1
              style={{
                fontWeight: "100"
              }}
            >
              NOW PLAYING
            </h1>
            <span
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "20vw",
                  height: "40vh",
                  objectFit: "cover"
                }}
              />
              <div
                style={{
                  marginLeft: "5vw"
                }}
              >
                <h1
                  style={{
                    color: "#266",
                    fontWeight: "500"
                  }}
                >
                  {movie.title}
                </h1>
                <p>
                  {movie.genres.length > 0 ? "Genres" : "Genre"}:
                  {movie.genres.map(({ name }, index) =>
                    index + 1 === movie.genres.length ? ` ${name}` : ` ${name},`
                  )}
                </p>
                <p>
                  {movie.production_companies.length > 0
                    ? "Producers"
                    : "Producer"}
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
                <h2
                  style={{
                    fontWeight: "500"
                  }}
                >
                  SYNOPSIS
                </h2>
                <p> {movie.overview} </p>
              </div>
            </span>
            {reviews.length > 0 && (
              <div>
                <h2 style={{ fontWeight: "400", fontSize: 40 }}>Reviews</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginBottom: "5vw",
                    justifyContent: "space-evenly"
                  }}
                >
                  {reviews.map(({ author, content, url }) => (
                    <Card
                      style={{
                        width: "25vw",
                        margin: "2vw"
                      }}
                    >
                      <CardHeader title={`Written By : ${author}`} />
                      <CardBody>
                        <p>
                          {content.slice(0, 100)}
                          {content.length > 100 && "..."}
                        </p>
                      </CardBody>
                      <CardFooter
                        right={
                          <Button
                            style={{
                              backgroundColor: "#266",
                              color: "#ba7",
                              borderColor: "#ba7"
                            }}
                            onClick={() => window.open(url)}
                          >
                            View In Web
                          </Button>
                        }
                      />
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Detail;
