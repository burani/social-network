import React from "react";
import {Field, reduxForm} from "redux-form";
import FormElement from "../../../utils/FormElement";
import s from "../../../utils/utils.module.css";

const ProfileFormInput = FormElement("input");
const ProfileFormTextarea = FormElement("textarea");

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Submit</button>
            {error ? <div className={s.formSummaryError}>
                {error}
            </div> : ""}
            <div>
                <b>Username: </b><Field placeholder={"fullName"} name={"fullName"} component={ProfileFormInput}
                                        validate={[]}/>
            </div>
            <div>
                <b>About me:</b><Field placeholder={"aboutMe"} name={"aboutMe"} component={ProfileFormTextarea}
                                       validate={[]}/>
            </div>
            <div>
                <b>Looking for a job:</b><Field placeholder={"lookingForAJob"} name={"lookingForAJob"}
                                                component={"input"}
                                                type={"checkbox"}/>
            </div>
            <div>
                <b>Job description: </b><Field placeholder={"lookingForAJobDescription"}
                                               name={"lookingForAJobDescription"}
                                               component={ProfileFormTextarea} validate={[]}/>
            </div>
            <h2>Contacts</h2>
            {
                Object.keys(profile.contacts).map((contact) => {
                    return <div>
                        <b>{contact}</b>: {<Field placeholder={contact} name={"contacts." + contact}
                                                  component={ProfileFormInput}
                                                  validate={[]}/>}
                    </div>
                })
            }


        </form>
    )
};

export default reduxForm({form: 'profiledata'})(ProfileDataForm);

