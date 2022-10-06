import React from "react"
function  First(props)
{
return(
    <div>
        <h1>Hello {props.name}!!!!</h1>
        <p>now inside First component</p>
        <h3>and u r id is {props.id}</h3>
        <input type="text" placeholder="Enter Name" /><br />
        <input type="password" placeholder="Password"/>
    </div>
)

}
export default First

