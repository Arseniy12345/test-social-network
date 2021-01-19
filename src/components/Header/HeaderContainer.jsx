import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setAuth, logout} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  data: state.auth.data,
  isAuth: state.auth.isAuth,
  userPhoto: state.auth.photo
});

export default connect(mapStateToProps, { setAuth, logout })(
  HeaderContainer
);
