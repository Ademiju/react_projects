// import Feature from "./components/Feature"
import Task from "./components/Task"
import Feature from "./components/Features"
import location from "./assets/location.svg"
import user from "./assets/user.svg"
import calender from "./assets/calender.svg"


 const App = () =>{
    return (
        <>
        <label className="name-label" for="name">Name:</label>
        <input id="name" type="text" name="name"></input>
        <button style={{backgroundColor: "blue", color: "white"}}>Click me</button>
        <Task name="Task1"/>
        <Task desc="Learn React"/>
        <Task name="Task3"/>
        <Feature header1="Location" icon1={location} paragraph1="Where are you going?" header2="Travelers" icon2={user} paragraph2="Add guests"/>
        <Feature header1="Check in" icon1={calender} paragraph1="Add date" header2="Check out" icon2={calender} paragraph2="Add guests"/>
        </>
    )
}
export default App