import React from "react"
import { Grid } from "semantic-ui-react"
import "./Friend.css"

export const FriendCard = ({ friend }) => {
    
                return(
                    
                    <section className="friend">
                    <i className="wolf-icon" class="fab fa-wolf-pack-battalion fa-5x"></i>
                        <h3 class="friend_name">{friend.user.username}</h3>
                        <Grid container column={2}>
                        <Grid.Row>
                            <div class="icons">
                        <i className="delete-icon"class="fas fa-user-times fa-1x"></i>  
                        <i className="chat-icon"class="far fa-comment-dots fa-1x"></i>
                        </div>
                        </Grid.Row>
                        </Grid>
                </section>
)}