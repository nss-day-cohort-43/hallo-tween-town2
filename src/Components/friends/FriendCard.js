import React from "react"

export const FriendCard = ({ friend }) => {
    
                return(
                <section className="friend">
                    <i className="wolf-icon" class="fab fa-wolf-pack-battalion fa-5x"></i>
                        <h3 className="friend_name">{friend.user.username}</h3> 
                        <i className="delete-icon"class="fas fa-user-times fa-1x"></i>  
                        <i className="chat-icon"class="far fa-comment-dots fa-1x"></i>
                </section>
)}