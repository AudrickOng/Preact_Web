import { Router } from "preact-router";
import Home from "../routes/home";
import Detail from "../routes/detail";
import NotFound from "../routes/404";
const App = () => (
  <div id="app" style={{ overflow: "hidden" }}>
    <Router>
      <Home path="/:type?" />
      <Detail path="/detail/:id" />
      <NotFound default />
    </Router>
  </div>
);

export default App;
