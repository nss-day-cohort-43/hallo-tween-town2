import React from "react"
import { Grid } from "semantic-ui-react"
import "./Friend.css"
import { Card } from "semantic-ui-react";

export const FriendCard = ({ friend }) => {
    
                return(
                    <Card>
                         <Card.Content>
                    <section className="friend">
                    <i className="wolf-icon" class=" fab fa-wolf-pack-battalion fa-5x"></i>
                    <Card.Header><h3 class="friend_name">{friend.user.username}</h3>
                        
                        </Card.Header><Card.Content>
                            <div class="icons">
                        <i className="delete-icon"class="fas fa-user-times fa-1x"></i>  
                        <i className="chat-icon"class="far fa-comment-dots fa-1x"></i>
                        </div>
                        </Card.Content>
                </section>
                </Card.Content>
                </Card>
)}