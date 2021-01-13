import React from "react";
import { connect } from "react-redux";
import Find from "./Find";
import {requestUsers,setUnfollow,setFollow} from "./../../redux/find-reducer";
import Preloader from "./../Common/Preloader/Preloader";
import { getUsers, getPageNumber, getPageSize, getTotalCount, getIsFetching, getFollowingInProgress } from "../../redux/find-reseloctors";

class FindAPIContainer extends React.Component {
  componentDidMount() {
    const {pageSize, pageNumber} = this.props
    this.props.requestUsers(pageSize, pageNumber)
  }

  getNextUsers = (p) => {
    const {pageSize} = this.props
    this.props.requestUsers(pageSize, p)
  };

  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Find
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          pageNumber={this.props.pageNumber}
          users={this.props.users}
          getNextUsers={this.getNextUsers}
          followingInProgress={this.props.followingInProgress}
          setUnfollow={this.props.setUnfollow}
          setFollow={this.props.setFollow}
        />
      </>
    );
  };
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageNumber: getPageNumber(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

const FindContainer = connect(mapStateToProps, {
  requestUsers,
  setUnfollow,
  setFollow
})(FindAPIContainer);
export default FindContainer;
