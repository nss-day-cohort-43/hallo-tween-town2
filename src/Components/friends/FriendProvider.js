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
    //need specific friend to see
    const getFriendById= (id) =>{
        return fetch(`http://localhost:8088/friends?friendId=${userId}&userId=${id}&_expand=user`)
        .then(res=>res.json())
    }

    //need to delete a friend
    const deleteFriend = friendId => {
        return fetch(`http://localhost:8088/friends/${friendId}`, {
            method: "DELETE"
        })
        .then(getFriends)
    }

    return(
        <FriendContext.Provider value={{
            friends, getFriends, addFriend, getFriendById, deleteFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}

