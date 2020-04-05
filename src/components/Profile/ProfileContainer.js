import React from "react";
import {setProfile} from "../../redux/profile-reducer";
import connect from "react-redux/lib/connect/connect";
import * as axios from "axios";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}


//классовая контейнерная компонента, которая используется, чтобы отрисовать компоненту Profile и внедрить в нее ajax функционал
class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;

        if (!userId) userId = 2;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setProfile(response.data);
            })
    }


    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}


const WithURLProfileContainer = withRouter(ProfileContainer);

//Еще одна контейнерная компонента, которая создается методом connect от redux и позволяет внедрить в классовую контейнерную компоненту информацию из store.
export default connect(mapStateToProps, {setProfile})(WithURLProfileContainer);