import React from 'react';

const GuestInputForm = props =>
        <form
            onSubmit={props.newGuestSubmitHandler}
        >
        <input
            type="text"
            value={props.pendingGuest}
            placeholder="Invite Someone"
            onChange={props.handleNameInput}
        />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>


export default GuestInputForm;