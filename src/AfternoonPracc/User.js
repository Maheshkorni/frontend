import React, { Component } from "react";

export default class User extends Component{
    componentWillUnmount()
    {
        alert("User HAs been deleted")
    }
    render()
    {
        return(
            <div>
                <ul>
                    <li>Name:Anil</li>
                    <li>Email:Webanilsindu@test.com</li>
                    <li>Contact:703287871</li>
                </ul>
            </div>
        )
    }
}