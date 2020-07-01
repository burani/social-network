import React from "react";
import User from "./User";

import Paginator from "./Paginator";
import Preloader from "./Preloader";

const Users = ({totalUsers, pageSize, currentPage, onPageNumClick, users, follow, unfollow, usersFollowing, isFetching}) => {



    return (
        <div>

            <Paginator totalUsers={totalUsers} pageSize={pageSize} currentPage={currentPage}  onPageNumClick={onPageNumClick} portionSize={10}/>


            {
                isFetching? <Preloader/> : users.map(
                (u) => {
                    return <User id={u.id} photo={u.photos.small} name={u.name} status={u.status} followed={u.followed}
                                 follow={follow} unfollow={unfollow} usersFollowing={usersFollowing}/>

                }
            )}
        </div>
    )
}

export default Users;