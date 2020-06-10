import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import store from "./redux/redux-store";
import Provider from "react-redux/lib/components/Provider";

function App(props) {
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

export default App;
