import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends React.Component {
  componentDidMount() {
    //called action creater.
    this.props.fetchUser();
  }
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
      </div>
    );
  }
}

//First argument of connect is for mapStateToProp and second is for 'actions' all the deferevt action creators
// All the "actions" are assigned to the "App" as props.
export default connect(
  null,
  actions
)(App);
