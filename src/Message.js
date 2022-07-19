import React from 'react';

class Message extends React.Component{

    constructor()
    {
        super();
        this.state={
            "id":101,
            "Name":"Sheethal",
            "Salary":60000
    }
    }
    Change()
    {
        this.setState({
            "Name":"Raj"
        })
        alert("Name changed")
    }
    render()
    {
        return(
            <>
             <h1>Name={this.state.Name}</h1>
             <h1>id={this.state.id}</h1>
             <h1>Salary={this.state.Salary}</h1>
            
             <button onClick={()=>this.Change()}>Change</button>
            </>
           
        )
    }
}
export default Message;