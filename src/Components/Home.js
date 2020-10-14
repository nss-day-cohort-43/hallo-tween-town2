import React from "react";
import "./App.js"
import {Image} from 'semantic-ui-react'
import "./App.css"
import Logo from "../moonLogo.png"
import "./Home.css"


const theLogo = <img src={Logo} alt="hallowTWEEN" />


export const Home = () => (
    <>
        <div className="homeTitle">
            {theLogo}
        <h2>HalloTWEEN Town Werewolves</h2>
        <p>Catch us outside ...howling</p>
        </div>
        
    </>
)