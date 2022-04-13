import React from "react"
import ProfileCard from "./components/ProfileCard"
import "./MyApp.css"

const MyApp = () => {
    return (
        <div className="myapp-container">
            <ProfileCard username ="Ademiju" hobby ="Watching Sports"/>
            <ProfileCard username ="Increase" hobby ="Singing"/>
            <ProfileCard username ="Damilola" hobby ="Gisting"/>
        </div>
    )
}

export default MyApp