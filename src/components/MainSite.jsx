import React from 'react'
import Header from './Header'
import MainAndSide from './MainAndSide'
import Notification from './Notification'

export default function MainSite() {
    return (
        <div>
            <Header/>
            <Notification/>
            <MainAndSide/>
        </div>
    )
}
