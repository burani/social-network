import React from 'react';
import MyPosts from "./MyPosts";
import {updatePostActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../redux/StoreContext";


const MyPostsContainer = (props) => {

    return (

        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let changePost = (e) => {
                        let text = e.target.value;
                        store.dispatch(updatePostActionCreator(text));
                    }
                    return (<MyPosts changePost={changePost} addPost={addPost}
                                     profilePage={store.getState().profilePage}/>)

                }
            }
        </StoreContext.Consumer>
    );


}


export default MyPostsContainer;

