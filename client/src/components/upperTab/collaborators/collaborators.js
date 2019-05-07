import React from 'react';
import Classes from './collaborators.module.css';

export default function collaborators() {
    return (
        <div className={Classes.collaborators} onClick={() => console.log('helooooo')}>
            <i className="fas fa-users fa-lg" style={{ margin: "0 0.5rem" }}></i>
            Add/Remove Collaborators
        </div>
    )
}
