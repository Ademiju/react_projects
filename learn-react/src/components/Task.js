import React from "react"
import "./Task.css"

const Task = ({name, desc}) => {
    return (
        <div className="container">
            <div>{name}</div>
            <div>{desc}</div>
            <div>Completed</div>
            <button className="task-button">Delete</button>
        </div>
    )
}
Task.defaultProps ={
    name: "Task",
    desc: "Learn anything"
}
export default Task