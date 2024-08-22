import React from "react";
import Button from "../UI/Button";

const UserWebList = (props) => {
    return (
        <div>
            <h3>All Bookmarks:</h3>
            {props.users.map((user) => {
                return (
                    <div key={user.id}>
                        <div>{user.name}  {'> '}
                            <a href={user.url} >
                                {user.url}
                            </a>
                            <Button onClick={() => props.onDeleteUser(user.id)}>Delete</Button>
                        </div>
                        
                    </div>
                );
            })}
        </div>
    );
}

export default UserWebList;