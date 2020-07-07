import React from "react";
import {
    getProfileStatus,
    setProfileInfo,
    updatePhoto,
    updateProfileStatus,
    updateProfileInfo
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


//классовая контейнерная компонента, которая используется, чтобы отрисовать компоненту Profile и внедрить в нее ajax функционал
class ProfileContainer extends React.Component {




    componentDidMount() {
        this.getProfileInfo();
    }


    componentDidUpdate(prevProps, prevState) {
        let currentUserId = this.props.match.params.userId;
        if (prevProps.match.params.userId !== currentUserId){
            this.getProfileInfo();
        }
    }

    getProfileInfo() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) this.props.history.push("/login");
        }

        this.props.setProfileInfo(userId);
        this.props.getProfileStatus(userId);
    }






    render() {
        return (<Profile {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.userId}/>)
    }
}

// ProfileContainer -> withRouter -> connect -> withAuthRedirect

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {setProfileInfo, getProfileStatus, updateProfileStatus, updatePhoto, updateProfileInfo}),
    withRouter
)(ProfileContainer)


// const WithURLProfileContainer = withRouter(ProfileContainer);

// export default WithAuthRedirect(connect(mapStateToProps, {setProfileInfo})(WithURLProfileContainer));