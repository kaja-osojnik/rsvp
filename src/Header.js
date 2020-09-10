import React from 'react';
import GuestInputForm from './GuestInputForm';

const Header = props => {
    return(
        <header>
            <h1>RSVP</h1>
            <p>A Treehouse App</p>
            <GuestInputForm
                newGuestSubmitHandler={props.newGuestSubmitHandler}
                pendingGuest={props.pendingGuest}
                handleNameInput={props.handleNameInput}
            />
        </header>
    )
}

export default Header;