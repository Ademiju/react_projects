import React, {useState} from "react";
import image from "../assets/logo.svg";
import "./ProfileCard.css";

const ProfileCard = (props) =>{
    let{username, hobby} = props
    const handleClick = () => {
        let newObject = {username: `Mr ${username}`, hobby: `My ${hobby}`}
        setState({...state, ...newObject})
    }
    const [state, setState] = useState({username: username, hobby: hobby})

    return(
        <div className="profile-card">
            <img src={image} alt="profile-card" className="profile-card-avatar" />
            <div className="details-container">
                <div className="firstname-details">
                    <p>Name</p>
                    <h1>{state.username}</h1>
                </div>
                <div className="hobby-details">
                    <p>Hobby</p>
                    <h1>{state.hobby}</h1>
                </div>
            </div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )

}


export default ProfileCard


// there are 3 levels of managing state in react
//1. Component Level state mgt
//2. global level state mgt - Redox/context API
//3. app level
// PROPS : used to pass data from mother component to the child component
// STATE : present condition(Data) of a component
// STATE MANAGEMENT: creating, retrieving, updating data