import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status//изначальное состояние статуса приходит нам из глобального стейта.
    };

    enableEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    disableEditMode = () => {

        this.setState({
            editMode: false
        });
        this.props.updateProfileStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <div onBlur={this.disableEditMode}>
                        <input onChange={this.onStatusChange} autoFocus={true} type="text" value={this.state.status}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.enableEditMode}>{this.props.status || '------'}</span>
                    </div>}
            </>
        )
    }
}

export default ProfileStatus;