import React from "react";
import userPhoto from "../../assets/img/userPhoto.png";
import s from "./users.module.css";
import * as axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger;
        // https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // console.log(response.data);
                this.props.setTotalUsers(response.data.totalCount);
            })
    }


    //On methods
    onPageNumClick = (pageNum) =>{
        this.props.setCurrentPage(pageNum);
    //    здесь надо опять делать ajax запрос
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNum}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // console.log(response.data);
                this.props.setTotalUsers(response.data.totalCount);
            })
    }



    render() {
        let pages = [];//это можно использовать как для самих элементов, так и для просто чисел
        let totalPages = Math.ceil(this.props.totalUsers / this.props.pageSize);

        for (let i = 1; i <= totalPages; i++){
            pages.push(i);
        }

        return (<div>
            <div>
                {
                    pages.map((pageNum) => {
                        return <span className={pageNum === this.props.currentPage? s.currentPage: '' + ' ' + s.pageNumber} onClick={(event) => {
                            this.onPageNumClick(pageNum)
                        }}>{pageNum}</span>
                    })
                }
            </div>

            {this.props.users.map(
                (u) => {
                    return <div key={u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                        <span>name: {u.name}</span>
                        <span>status: {u.status}</span>
                        {
                            <button onClick={() => {
                                this.props.followToggle(u.id);
                            }
                            }>{u.followed ? 'unfollow' : 'follow'}</button>
                        }
                    </div>
                }
            )}
        </div>)
    }
}

export default Users;