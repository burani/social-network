import React from 'react';
import MyPosts from "./MyPosts";
import {updatePostActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";



const MapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changePost: (e) => {
            let text = e.target.value;
            dispatch(updatePostActionCreator(text));
        }
    }
}


const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);


export default MyPostsContainer;

