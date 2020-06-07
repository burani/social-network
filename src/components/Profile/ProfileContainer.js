import React from "react";
import {setProfileInfo} from "../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}


//классовая контейнерная компонента, которая используется, чтобы отрисовать компоненту Profile и внедрить в нее ajax функционал
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) userId = 2;

        this.props.setProfileInfo(userId);

    }


    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

// ProfileContainer -> withRouter -> connect -> withAuthRedirect

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {setProfileInfo}),
    withRouter
)(ProfileContainer)


// const WithURLProfileContainer = withRouter(ProfileContainer);

// export default WithAuthRedirect(connect(mapStateToProps, {setProfileInfo})(WithURLProfileContainer));