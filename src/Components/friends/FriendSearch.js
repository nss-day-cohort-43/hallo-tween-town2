import React, { useContext, useEffect } from "react"
import { FriendContext } from "./FriendProvider"
import { Input } from 'semantic-ui-react'
import "./Friend.css"

export const FriendSearch = () => {
    const { setSearchTerms } = useContext(FriendContext)
    const InputExampleIconPosition = () => (
        <Input icon='users' iconPosition='left' placeholder='Search users...' />
      )

    // useEffect(() => {
    //     setSearchTerms("")
    // }, [])

    return (
        <>
            Search wolves:
           {InputExampleIconPosition()}
        </>
    )
}
