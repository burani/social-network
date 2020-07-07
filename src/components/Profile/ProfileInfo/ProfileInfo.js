import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/img/userPhoto.png";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {
    //здесь нужно будет добавить баннер

    const [editMode, setEditMode] = useState(false);

    //НЕ ДЕЛАТЬ ЭТУ ФУНКЦИЮ АСИНХРОННОЙ
    const onSubmit = (formData) => {
        let newProfile = {...props.profile, ...formData};
        debugger;
        props.updateProfileInfo(newProfile).then((res) => {
            if (res) {
                setEditMode(false);
            }
        })

    };


    const onPhotoSubmit = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large || userPhoto} className={s.profilePhoto}/>

                {
                    props.isOwner && <input type="file" onChange={onPhotoSubmit}/>
                }


                <div>
                    <b>Status: </b><ProfileStatus {...props}/>
                </div>

                <div className={s.buttonContainer}>
                    <h2>Profile info</h2>
                    {(props.isOwner && !editMode) && <button onClick={() => {
                        setEditMode(true);
                    }}>edit</button>}
                </div>
                {editMode ?
                    <ProfileDataForm profile={props.profile} onSubmit={onSubmit} initialValues={props.profile}/>:
                    <ProfileData profile={props.profile}/>}
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    let showContacts = !Object.values(props.profile.contacts).every(x => (x === null || x === ''));
    return (
        <div>
            <div>
                <b>Username: </b>{props.profile.fullName}
            </div>
            {props.profile.aboutMe && <div><b>About me: </b>{props.profile.aboutMe}</div>}
            {props.profile.lookingForAJob &&
            <div><b>Looking for a job: </b>{props.profile.lookingForAJob ? "yes" : "no"}</div>}
            {props.profile.lookingForAJob &&
            <div><b>Job description: </b>{props.profile.lookingForAJobDescription}</div>}

            <h2>Contacts</h2>
            {showContacts ? <Contacts contacts={props.profile.contacts}/> : "Information is absent"}


        </div>
    )
}

const Contacts = ({contacts}) => {
    return <div>
        {Object.keys(contacts).map((contact) => {
            if (contacts[contact]) {
                return <div><b>{contact}: </b>{contacts[contact]}</div>
            }
        })}
    </div>
}


export default ProfileInfo;