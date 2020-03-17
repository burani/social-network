import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
// import {addPost, updateNewPostText} from "../../../redux/state";

import {updatePostActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        // props.addPost();
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = "";
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePostActionCreator(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;