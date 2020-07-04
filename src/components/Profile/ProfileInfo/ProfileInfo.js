import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/img/userPhoto.png";


const ProfileInfo = (props) => {
    //здесь нужно будет добавить баннер


    const onPhotoSubmit = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div>


            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large || userPhoto} className={s.profilePhoto}/>

                {
                    props.isOwner && <input type="file" onChange={onPhotoSubmit}/>
                }


                <ProfileStatus {...props}/>
                <p>
                    {"About me: " + props.profile.aboutMe}
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo;