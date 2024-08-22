import React, { useState } from 'react';
import './App.css';
import UserWeb from './components/User/UserWeb';
import UserWebList from './components/User/UserWebList';

function App() {

  const [userWebList, setUserWebList] = useState([]);

  const addUserHandler = (uName, uUrl) => {
    setUserWebList((prevUsersList) => {
      return [...prevUsersList, {
        name: uName, url: uUrl,
        id: Math.random().toString()
      }]
    })
  }

  const deleteUserHandler = (userId) => {
    setUserWebList((prevUsersList) => {
      return prevUsersList.filter(user => user.id !== userId)
    })
  }

  return (

    <div className="App">
      <h2>Bookmark Website:</h2>
      <UserWeb onAddUser={addUserHandler} />
      <UserWebList users={userWebList} onDeleteUser={deleteUserHandler}/>
    </div>
  );
}

export default App;
