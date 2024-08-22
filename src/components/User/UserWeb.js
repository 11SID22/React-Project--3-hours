import React, { useState } from "react";

import './UserWeb.css';
import Button from "../UI/Button";

const UserWeb = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredUrl, setEnteredUrl] = useState('');

    const titlechangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const urlChangeHandler = (event) => {
        setEnteredUrl(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredTitle, enteredUrl);
      props.onAddUser(enteredTitle, enteredUrl)
        setEnteredTitle('');
        setEnteredUrl('');
    }

    return (
        <form className="input" onSubmit={addUserHandler}>
            <label htmlFor="title">Website Title:</label>
            <input
                type="text"
                id="title"
                value={enteredTitle}
                onChange={titlechangeHandler}
            >
            </input>
            <label htmlFor="url">Website URL:</label>
            <input
                type="url"
                id="url"
                value={enteredUrl}
                onChange={urlChangeHandler}
            >
            </input>
            <Button type="submit">Add</Button>
        </form>
    )
}

export default UserWeb;