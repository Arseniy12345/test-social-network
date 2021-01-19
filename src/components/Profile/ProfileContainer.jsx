import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  setProfileEditMode,
  saveProfileData
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileAPIContainer extends React.Component {

  refreshProgile() {
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

  componentDidMount() {
    this.refreshProgile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProgile()
    }
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
        savePhoto={this.props.savePhoto}
        isOwner={!this.props.match.params.userId}
        isEditMode={this.props.isEditMode}
        setProfileEditMode={this.props.setProfileEditMode}
        saveProfileData={this.props.saveProfileData}
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
    isEditMode: state.profilePage.profileEditMode
  };
};

const ProfileContainer = compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, setProfileEditMode, saveProfileData }),
  withRouter
)(ProfileAPIContainer);

export default ProfileContainer;
