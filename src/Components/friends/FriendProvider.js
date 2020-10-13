//get all of friends
//add friends
//delete friends

import React, {useState, createContext} from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])
    const userId = sessionStorage.getItem("werewolf_user")

    //get all of the friends of active user by friend's user ID and expand on
    //their id to get all info
    
    const getFriends = () => {
        return fetch(`http://localhost:8088/friends?friendId=${userId}&_expand=user`)
        .then(res => res.json())
        .then(setFriends)
    }
    const addFriend = friendObj => {
        return fetch("http://localhost:8088/friends",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friendObj)
    })
    .then(getFriends)
    }
    return(
        <FriendProvider.Provider value={{
            friends, getFriends, addFriend
        }}>
            {props.children}
        </FriendProvider.Provider>
    )
}

