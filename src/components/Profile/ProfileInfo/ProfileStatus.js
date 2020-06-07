import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    render() {
        return (
            <>
                {this.state.editMode ?

                    <div onBlur={() => {
                        this.setState({
                            editMode: false
                        })
                    }}>
                        <input autoFocus={true} type="text" value={this.props.status}/>
                    </div>
                    :
                    <div onDoubleClick={() => {
                        this.setState({
                            editMode: true
                        })
                    }}>
                        <span>{this.props.status}</span>
                    </div>}


            </>
        )
    }
}

export default ProfileStatus;