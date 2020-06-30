import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Users/Preloader";
import store from "./redux/redux-store";

class App extends Component {

    componentDidMount() {
        //Здесь происходит инициализация приложения
        this.props.initializeApp();

    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        {/*<Route path='/dialogs' render={ () => }/>*/}
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>

                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() =>

                            <LoginPage/>

                        }/>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}


const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SocialNetwork = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialNetwork;
