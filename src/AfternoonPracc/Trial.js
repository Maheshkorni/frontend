import React  from "react";
import User from "./User";

export default class Trial extends React.Component{
    constructor()
    {
        super();
        this.state={
            toggle:true
        }
    }
    render(){
        return (
            <div>
                <h1>React : Component will Unmount</h1>
                {
                    this.state.toggle?
                    <User></User>:null
                }
                <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete</button>
            </div>
        )
    }
}