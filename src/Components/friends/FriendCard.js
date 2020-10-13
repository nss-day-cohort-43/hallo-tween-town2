import React, {useContext} from "react"
import {Link} from "react-router-dom"

export const FriendCard = ({ friend }) => (
    <section className="friend">
        <h3 className="friend_name">
            <Link to={`friend/`}>
                {friend.user.name}
            </Link>
        </h3>
    </section>
)