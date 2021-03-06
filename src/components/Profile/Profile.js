import React from 'react';

import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Users/Preloader";

const Profile = (props) => {

    // debugger;
    if (!props.profile) return <Preloader/>;
    return (
        <div>
            {/*props: profile, status, getProfileStatus, updateProfileStatus*/}
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
            {/*<MyPosts store={props.store} />*/}
        </div>
    )
}

export default Profile;