import React from 'react';

const Guest = props => {
    return(
        <div>
            { props.isEditing ?
                <input
                    type="text"
                    value={props.children}
                    onChange={props.handleNameEdits}
                />
                :
                <span>{props.children}</span>
            }
            <span>{props.name}</span>
        </div>
    )
}

export default Guest;