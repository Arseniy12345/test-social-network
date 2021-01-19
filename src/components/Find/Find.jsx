import React from "react";
import User from "./User";
import Pagination from "../Common/Pagination/Pagination"


let Find = ({ totalCount, pageSize, pageNumber, getNextUsers, portionSize, ...props }) => {
  return (
    <div>
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        pageNumber={pageNumber}
        getNextUsers={getNextUsers}
        portionSize={portionSize}
      />
      {props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          followingInProgress={props.followingInProgress}
          setFollow={props.setFollow}
          setUnfollow={props.setUnfollow}
        />
      ))}
    </div>
  );
};

export default Find;
