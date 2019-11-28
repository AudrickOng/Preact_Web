import { Component } from "preact";
import Axios from "../../config/axios";
import { route } from "preact-router";
import {
  Card,
  CardImage,
  CardHeader,
  CardFooter,
  Button,
  Icon
} from "preact-fluid";
import Navbar from "../../components/navbar";

class Home extends Component {
  state = {
    movies: []
  };
  componentDidUpdate() {
    this.getMovies(this.props.matches.type);
  }
  componentDidMount() {
    this.getMovies(this.props.matches.type);
  }
  getMovies = async type => {
    if (!type) {
      const {
        data: { results: movies }
      } = await Axios.get(
        `/movie/now_playing?api_key=${process.env.PREACT_APP_API_KEY}`
      );
      this.setState({ movies });
    } else {
      const {
        data: { results: movies }
      } = await Axios.get(
        `/movie/${type}?api_key=${process.env.PREACT_APP_API_KEY}`
      );
      this.setState({ movies });
    }
  };
  render(props, state) {
    return (
      <div>
        <Navbar />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: "10vw",
            marginRight: "10vw",
            justifyContent: "space-evenly"
          }}
        >
          {state.movies && state.movies.length > 0 ? (
            state.movies.map(movie => (
              // <Card style={{ width: "15vw", margin: "2vw" }}>
              //   <CardImage
              //     src={
              //       movie.poster_path
              //         ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
              //         : "https://retohercules.com/images/crying-meme-png-8.png"
              //     }
              //     overlay={{
              //       title: movie.title,
              //       subtitle: `Released on: ${new Date(
              //         movie.release_date
              //       ).toDateString()}`
              //     }}
              //   />
              //   <h1>Hi</h1>
              // </Card>
              <Card style={{ width: "15vw", margin: "2vw" }}>
                <CardImage
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="poster"
                />
                <CardHeader
                  title={movie.title}
                  subtitle={`Released on: ${new Date(
                    movie.release_date
                  ).toDateString()}`}
                />
                <CardFooter
                  left={
                    <Button
                      rounded
                      size="small"
                      style={{
                        color: "#ba7",
                        borderColor: "#ba7",
                        backgroundColor: "#266"
                      }}
                      onClick={() => route(`/detail/${movie.id}`)}
                    >
                      Detail
                    </Button>
                  }
                />
              </Card>
            ))
          ) : (
            <img
              src={require("../../assets/oops.png")}
              alt="Oops"
              style={{
                width: "auto",
                height: "50vh",
                marginTop: "15vh"
              }}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Home;
