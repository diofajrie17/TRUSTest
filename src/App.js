import React from "react";
import "./App.css";
import Home from "./pages/Home/index";
import { Route, Switch } from "react-router-dom";
import ClassDetail from "./pages/ClassDetail";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

// componentDidMount() {
//   fetch(
// "https://warm-ravine-03466.herokuapp.com/")
//       .then((res) => res.json())
//       .then((json) => {
//           this.setState({
//               items: json,
//               DataisLoaded: true
//           });
//       })
// }


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/details" component={ClassDetail}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
