import React from "react";

class Life extends React.Component{
    constructor(){
        super();
        console.warn("this is a Constructor")
        this.state={
            Active:null,
            who:null
        }
    }
    componentDidMount()
    {
        console.warn("this is a Componentdid Mount")
    }
    componentDidUpdate()
    {

        console.log("Inside ComponentdidUpdate")
        if(this.state.who==null)
        {
            this.setState({who:"Value updated"})
            console.log("Inside if loop of ComponentdidUpdate part")
        }
    }
    render(){
        console.warn("this is a render method")
        return(<><h1>Life Cycle Method Example</h1>
        <h1>{this.state.who}</h1>
        <button onClick={()=>{this.setState({Active:"True"})}}>Update</button>
        </>)
    }
}
export default Life