import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import { setInitialaze } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import { withSuspence } from "./hoc/withSuspence";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const FindContainer = React.lazy(() =>
  import("./components/Find/FindContainer")
);

class App extends React.Component {
  rejectionPromiseError(event) {
    alert("reject promise");
  }

  componentDidMount() {
    this.props.setInitialaze();
    window.addEventListener("unhandledrejection", this.rejectionPromiseError);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.rejectionPromiseError
    );
  }

  render() {
    if (!this.props.initialaze) {
      return <Preloader />;
    }
    return (
      <div>
        <HeaderContainer />
        <div className="app-wrapper">
          <Nav />
          <div className="app-wrapper-content">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/profile" />} />
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/dialogs" render={withSuspence(DialogsContainer)} />
              <Route path="/find" render={withSuspence(FindContainer)} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
              <Route path="*" render={() => <div><p className="pageNotFoundText">СТРАНИЦА НЕ НАЙДЕНА</p></div>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialaze: state.app.initialaze,
});

export default connect(mapStateToProps, { setInitialaze })(App);
