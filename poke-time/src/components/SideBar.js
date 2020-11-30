import React from 'react';
import UserBioComponent from './UserBioComponent'
// import { ProgressPlugin } from 'webpack';

export default function SideBar(props) {
    return (
        <div className="ui left visible sidebar">
            <UserBioComponent user={props.user} />
        </div>
    )
}