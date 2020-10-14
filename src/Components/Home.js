import React from "react";
import "./App.js"
import {Image} from 'semantic-ui-react'
import "./App.css"
import Logo from "../moonLogo.png"


const theLogo = <img src={Logo} alt="hallowTWEEN" />


export const Home = () => (
    <>
        <div className="homeTitle">
            {theLogo}
        <h2>HalloTWEEN Town Werewolves</h2>
        <small>Catch us outside ...howling</small>
        </div>
        
    </>
)