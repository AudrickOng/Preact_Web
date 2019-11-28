import { Component } from "preact";
import { Link } from "preact-router";

class Navbar extends Component {
  render() {
    return (
      <nav>
        {/* LVL1NAV */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "10vh",
            backgroundColor: "#266",
            paddingLeft: "10vw",
            paddingRight: "10vw"
          }}
        >
          <div
            style={{
              alignSelf: "center"
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                fontSize: 30,
                fontFamily: "Baskervville",
                fontWeight: "bold",
                color: "#ba7"
              }}
            >
              The Movie Finder
            </Link>
          </div>
        </div>
        {/* LVL2NAV */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "10vh",
            backgroundColor: "#fff",
            paddingLeft: "10vw",
            paddingRight: "10vw"
          }}
        >
          <div
            style={{
              alignSelf: "center",
              fontFamily: "Playfair Display",
              fontSize: 20
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#266",
                marginLeft: "5vw"
              }}
            >
              Now Playing
            </Link>
            <Link
              href="/upcoming"
              style={{
                textDecoration: "none",
                color: "#266",
                marginLeft: "5vw"
              }}
            >
              Upcoming
            </Link>
            <Link
              href="/top_rated"
              style={{
                textDecoration: "none",
                color: "#266",
                marginLeft: "5vw"
              }}
            >
              Top Rated
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
