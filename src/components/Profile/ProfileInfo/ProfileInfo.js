import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    //здесь нужно будет добавить баннер

    return (
        <div>
            <div>


            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large}/>
                <ProfileStatus status={"Hello my friends"}/>
                <p>
                    {"About me: " + props.profile.aboutMe}
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo;