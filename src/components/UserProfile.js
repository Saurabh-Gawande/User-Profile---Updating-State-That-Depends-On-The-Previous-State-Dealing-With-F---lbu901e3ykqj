import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{
    const userData = useContext(UserContext);
    return (
             <>
              <h1 id="name">Name: {userData.name}</h1>
              <h1 id="age">Age: {userData.age}</h1>
             </>
    );
}

export {UserProfile}