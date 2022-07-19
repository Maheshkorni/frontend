import React from "react";
export default class Hiding extends React.Component{
    constructor(){
        super()
        this.state={
            "Msg":"This sentence will Vanish",
            show:true
        }
    }
    render(){
        return(
            <div>
                {this.state.show?<h1>{this.state.Msg}</h1>:null}
            <button onClick={()=>{this.setState({show:!this.state.show})}}>Change</button>
            </div>
        )
    }


}