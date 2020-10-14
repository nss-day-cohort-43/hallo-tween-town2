import React, {useContext, useEffect} from "react"
import {FriendContext} from "./FriendProvider"
import {FriendCard} from "./FriendCard"
import {useHistory} from "react-router-dom"
import { Header, Icon, Image, Button } from 'semantic-ui-react'
import "./Friend.css"

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>My Wolf Pack</Header.Content>
    </Header>
    <Image
      centered
      size='large'
    />
  </div>
)

export const FriendsList = () =>{
    const {friends, getFriends} = useContext(FriendContext)

    useEffect(() => {
        getFriends()
    },[])

    const history = useHistory()
    
    return (
        <div className="friends">
            {HeaderExampleUsersIcon()}
            <Button primary onClick={()=> {history.push("/friends/add")}}>
                Add New Friend
             </Button>
            {friends.map(friend => {
                return<FriendCard key={friend.id} friend={friend} />
            })}
        </div>
    )
}