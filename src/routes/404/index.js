import Navbar from "../../components/navbar";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import { route } from "preact-router";
const ErrorPage = () => (
  <div style={{ textAlign: "-webkit-center" }}>
    <Navbar />
    <div>
      <img
        src="https://www.eviaglobal.com/images/404.png"
        alt="404"
        style={{
          height: "50vh",
          marginTop: "20vh"
        }}
      />
    </div>
    <Button
      style={{
        width: 100,
        marginTop: 10,
        color: "#000",
        borderColor: "#000"
      }}
      outlined
      onClick={() => route("/")}
    >
      Home
    </Button>
  </div>
);

export default ErrorPage;
