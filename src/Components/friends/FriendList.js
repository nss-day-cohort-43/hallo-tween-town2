import React, {useContext, useEffect} from "react"
import {FriendContext} from "./FriendProvider"
import {FriendCard} from "./FriendCard"
import {useHistory} from "react-router-dom"

export const FriendsList = () =>{
    const {friends, getFriends} = useContext(FriendContext)

    useEffect(() => {
        getFriends()
    },[])
    const history = useHistory()

    return (
        <div className="friends">
            <h2>My Wolf Pack</h2>
            <button onClick={()=> {history.push("/friends/add")}}>
                Add New Friend
             </button>
            {friends.map(friend => {
                return<FriendCard key={friend.id} friend={friend} />
            })}
        </div>
    )
}