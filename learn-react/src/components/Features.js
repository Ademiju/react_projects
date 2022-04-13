import React from "react";
import "./Features.css"

const Features = (props) =>{
    return (
        <div>
            <div className="feature-container">
                <div className="features1">
                    <div className="feature-icon">
                        <img src={props.icon1}  height="20px" alt="icon"/>
                    </div>
                    <div>
                        <h3>{props.header1}</h3>
                        <p>{props.paragraph1}</p>
                    </div>
                </div>
                    <div className="features2">
                        <div className="feature-icon2">
                            <img src={props.icon2}  height="20px" alt="icon"/>
                        </div>
                    <div>
                        <h3>{props.header2}</h3>
                        <p>{props.paragraph2}</p>
                    </div>
                </div>

                </div>
        
            

           
        </div>
    )
}
export default Features