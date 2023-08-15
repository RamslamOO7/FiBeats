import React, { useState, useEffect } from 'react'
import {RWebShare} from "react-web-share"
import '../App.css'
import { IoSend, IoPersonAddSharp, IoLogoUsd } from 'react-icons/io5'
import Qoutes from './Qoutes'

function Header() {
    return (
        <div className='header'>
            <div>
                <p className='brandName'>FiBeats</p>
            </div>
            <Qoutes/>
            <div className='mainMenu'>
                <a href='https://twitter.com/RamslamOO7' target='_blank'><IoPersonAddSharp /></a>  
                <a href='https://www.buymeacoffee.com/saurabhchauhan' target='_blank'><IoLogoUsd /></a>  
                <span>
                    <RWebShare
                        data={{
                            text: "Checkout this awesome LoFi music website!",
                            url: "https://fibeats.netlify.app/",
                            title: "FiBeats",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                       <IoSend/>
                    </RWebShare>
                </span>
            </div>
        </div>
    )
}

export default Header