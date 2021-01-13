import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileAPIContainer extends React.Component {
  componentDidMount() {
    const { match, userId, history } = this.props;
    let id = match.params.userId;
    if (id) {
      this.props.getUserProfile(id);
      this.props.getStatus(id);
    } else {
      id = userId;
      if (id) {
        this.props.getUserProfile(id);
        this.props.getStatus(id);
      } else {
        history.push("/login");
      }
    }
  }
  componentDidUpdate() {
    const { isAuth, history } = this.props;
    if (!isAuth) {
      history.push("/login");
    }
  }
  render = () => {
    return (
      <Profile
        profileData={this.props.profileData}
        isAuth={this.props.isAuth}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  };
}

let mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    userId: state.auth.data.id,
  };
};

const ProfileContainer = compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileAPIContainer);

export default ProfileContainer;
