import React from "react";
export default class StateEx extends React.Component{
constructor()
{
    super();
    this.state={
        "Id":101,
        "Name":"Raju",
        "Salary":12000
    }

}
Changer(){
    this.setState({
        "Name":"Venkat"
    })
}
render(){
    return(
        <>
        <h1>id={this.state.Id}</h1>
        <h1>Name={this.state.Name}</h1>
        <h1>Salary={this.state.Salary}</h1>
        <button onClick={this.Changer.bind(this)}>Change Name</button>
        </>
        
    )
}

}