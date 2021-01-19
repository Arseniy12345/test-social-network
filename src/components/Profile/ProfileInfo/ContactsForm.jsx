import React from "react"
import { reduxForm } from "redux-form"
import {createField, InputForm} from "../../Common/FormsControl/InputForm"
import styles from "./ProfileInfo.module.css"

const ContactsForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <br/>
            ФИО: {createField("fullName", InputForm, "text", "", [], null)}
            Обо мне: {createField("aboutMe", InputForm, "text", "", [], null)}
            В поисках работы: {createField("lookingForAJob", InputForm, "checkbox", "", [], null)}
            Желаемая должность: {createField("lookingForAJobDescription", InputForm, "text", "", [], null)}
            Ссылка на github: {createField("contacts.github", InputForm, "text", "", [], null)} 
            Ссылка на vk: {createField("contacts.vk", InputForm, "text", "", [], null)} 
            Ссылка на facebook: {createField("contacts.facebook", InputForm, "text", "", [], null)} 
            Ссылка на instagram: {createField("contacts.instagram", InputForm, "text", "", [], null)}
            Ссылка на twitter: {createField("contacts.twitter", InputForm, "text", "", [], null)}
            Ссылка на ваш сайт: {createField("contacts.website", InputForm, "text", "", [], null)}
            Ссылка на youtube: {createField("contacts.youtube", InputForm, "text", "", [], null)}
            Ссылка на mainLink: {createField("contacts.mainLink", InputForm, "text", "", [], null)}
            {error && <span className={styles.errorForm}>{error}</span>}
            <button className={styles.editPhotoButton}>Save</button>
        </form>
    )
}

const ContactsFormRedux = reduxForm({form: "profileData"})(ContactsForm)

export default ContactsFormRedux