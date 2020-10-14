import React, { useContext, useEffect } from "react"
import { FriendContext } from "./FriendProvider"
import { Input } from 'semantic-ui-react'
import "./Friend.css"

export const FriendSearch = () => {
    const { setSearchTerms } = useContext(FriendContext)
    const InputExampleIconPosition = () => (
        <Input class="searchBar" icon='users' iconPosition='left' placeholder='Search wolves...' />
      )

    // useEffect(() => {
    //     setSearchTerms("")
    // }, [])

    return InputExampleIconPosition()
}
