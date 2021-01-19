import React, { useState } from "react";
import StatusInfoWithHooks from "./StatusInfoWithHooks";
import userAva from "../../../assets/images/user.png";
import styles from "./ProfileInfo.module.css";
import Contacts from "./Contacts";
import ContactsFormRedux from "./ContactsForm";

const ProfileInfo = ({
  profileData,
  status,
  updateStatus,
  savePhoto,
  isOwner,
  isEditMode,
  setProfileEditMode,
  saveProfileData,
}) => {
  const onChangePhoto = (e) => {
    savePhoto(e.target.files[0]);
  };

  const onSaveProfileData = (profile) => {
    saveProfileData(profile);
  };

  const [fullInformation, viewFullInformation] = useState(false);

  const closeEditAndView = () => {
    setProfileEditMode(false);
    viewFullInformation(false);
  };

  return (
    <div className={styles.profileInfo}>
      <div className={styles.profilePhoto}>
        <img
          className={styles.userPhoto}
          src={profileData.photos.small || userAva}
          alt=""
        />
        {isOwner && (
          <div>
            <input type="file" id="img" className={styles.inputFile} onChange={onChangePhoto} />
            <label for="img"><div className={styles.editPhotoButton}>sdvsdv</div></label>
          </div>
        )}
      </div>
      <div>
        {profileData.fullName}
        <StatusInfoWithHooks status={status} updateStatus={updateStatus} />
        <div>
          <b>LookingForAJob:</b>
          {profileData.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
          <b>LookingForAJobDescription:</b>
          {profileData.lookingForAJobDescription}
        </div>
        <div>
          {fullInformation ? (
            <button onClick={() => closeEditAndView()}>
              Скрыть полную информацию
            </button>
          ) : (
            <button onClick={() => viewFullInformation(true)}>
              Показать полную информацию
            </button>
          )}
        </div>
      </div>
      {fullInformation && !isEditMode && <Contacts profileData={profileData} />}
      {fullInformation && isEditMode && (
        <ContactsFormRedux
          initialValues={profileData}
          onSubmit={onSaveProfileData}
        />
      )}
      {isOwner && (
        <button onClick={() => setProfileEditMode(true)}>Edit</button>
      )}
      {/* {isEditMode ? (
        <ContactsFormRedux
          initialValues={profileData}
          onSubmit={onSaveProfileData}
        />
      ) : (
        <Contacts profileData={profileData} />
      )} */}
    </div>
  );
};

export default ProfileInfo;
