import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing}></Route>
            <Route exact path="/surveys" component={Dashboard}></Route>
            <Route path={"/surveys/new"} component={SurveyNew}></Route>
          </div>
        </BrowserRouter>
        <a href="/auth/google">Sign In Google</a> <br></br>
        <a href="/api/current_user">Current User</a>
        <br></br>
        <a href="/api/logout">logout</a>
      </div>
    );
  }
}

export default App;
