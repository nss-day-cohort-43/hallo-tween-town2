import React, {useContext, useEffect} from "react"
import {FriendContext} from "./FriendProvider"
import {FriendCard} from "./FriendCard"
import {useHistory} from "react-router-dom"
import { Header, Icon, Image, Button, Grid } from 'semantic-ui-react'
import "./Friend.css"


const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h3' icon textAlign='center'>
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
        <>
            {HeaderExampleUsersIcon()}
            <Button  class="addNew" primary onClick={()=> {history.push("/friends/add")}}>
                Add New Friend
             </Button>
        <div className="friends">
                </div>
             <Grid container columns={5}>
             <Grid.Row>

            {friends.map(friend => {
                return<Grid.Column><FriendCard key={friend.id} friend={friend} /></Grid.Column>
            })}
        </Grid.Row>
        </Grid>
</>
    )
}