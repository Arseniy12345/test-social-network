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
    <div>
      <div className={styles.profileInfo}>
        <div className={styles.profilePhoto}>
          <img
            className={styles.userPhoto}
            src={profileData.photos.small || userAva}
            alt=""
          />
          {isOwner && (
            <div>
              <input
                type="file"
                id="img"
                className={styles.inputFile}
                onChange={onChangePhoto}
              />
              <label for="img">
                <div className={styles.editPhotoButton}>Изменить</div>
              </label>
            </div>
          )}
        </div>
        <div className={styles.descriptionText}>
          <div>
            <span>
              <b>ФИО: </b>
              {profileData.fullName}
            </span>
          </div>
          <span>
            <b>Статус: </b>
          </span>
          <StatusInfoWithHooks status={status} updateStatus={updateStatus} />
          <div>
            <b>Ищет работу: </b>
            {profileData.lookingForAJob ? "✓" : "✖"}
          </div>
          <div>
            <b>Желаемая должность: </b>
            {profileData.lookingForAJobDescription
              ? profileData.lookingForAJobDescription
              : "---"}
          </div>
          <div>
            {fullInformation ? (
              <button
                className={styles.viewFullInfoButton}
                onClick={() => closeEditAndView()}
              >
                Скрыть полную информацию ᐱ
              </button>
            ) : (
              <button
                className={styles.viewFullInfoButton}
                onClick={() => viewFullInformation(true)}
              >
                Показать полную информацию ᐯ
              </button>
            )}
          </div>
        </div>
        {fullInformation && !isEditMode && (
          <div className={styles.contactsBlock}>
            <div>
              <span className={styles.descriptionText}>
                <b>Контакты</b>
              </span>
            </div>
            <Contacts profileData={profileData} />
          </div>
        )}
        {fullInformation && isEditMode && (
          <div className={styles.contactsBlock}>
            <ContactsFormRedux
              initialValues={profileData}
              onSubmit={onSaveProfileData}
            />
          </div>
        )}
        {fullInformation && !isEditMode && isOwner && (
          <button
            className={styles.editPhotoButton}
            onClick={() => setProfileEditMode(true)}
          >
            Изменить
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
