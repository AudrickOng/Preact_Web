import { Component } from "preact";
import Axios from "../../config/axios";
import Navbar from "../../components/navbar";

class Detail extends Component {
  state = { id: null };
  render({ id }) {
    // this.setState({ id });
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default Detail;
