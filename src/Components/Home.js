import React from "react";
import "./App.js"
import {Image} from 'semantic-ui-react'
import "./App.css"
import logo from "./img/moonLogo.png"

export const Home = () => (
    <>
        <div className="homeTitle">
            <Image src={logo} alt="hallo-tweens"/>
        <h2>HalloTWEEN Town Werewolves</h2>
        <small>Catch us outside ...howling</small>
        </div>
        
    </>
)