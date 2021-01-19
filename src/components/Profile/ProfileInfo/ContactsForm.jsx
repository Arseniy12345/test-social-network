import React from "react"
import { reduxForm } from "redux-form"
import {createField, InputForm} from "../../Common/FormsControl/InputForm"
import styles from "./ProfileInfo.module.css"

const ContactsForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            <br/>
            fullName: {createField("fullName", InputForm, "text", "", [], null)}
            aboutMe: {createField("aboutMe", InputForm, "text", "", [], null)}
            lookingForAJob: {createField("lookingForAJob", InputForm, "checkbox", "", [], null)}
            lookingForAJobDescription: {createField("lookingForAJobDescription", InputForm, "text", "", [], null)}
            github: {createField("contacts.github", InputForm, "text", "", [], null)} 
            vk: {createField("contacts.vk", InputForm, "text", "", [], null)} 
            facebook: {createField("contacts.facebook", InputForm, "text", "", [], null)} 
            instagram: {createField("contacts.instagram", InputForm, "text", "", [], null)}
            twitter: {createField("contacts.twitter", InputForm, "text", "", [], null)}
            website: {createField("contacts.website", InputForm, "text", "", [], null)}
            youtube: {createField("contacts.youtube", InputForm, "text", "", [], null)}
            mainLink: {createField("contacts.mainLink", InputForm, "text", "", [], null)}
            {error && <span className={styles.errorForm}>{error}</span>}
        </form>
    )
}

const ContactsFormRedux = reduxForm({form: "profileData"})(ContactsForm)

export default ContactsFormRedux