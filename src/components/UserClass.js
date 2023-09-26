import React from "react";

class UserClass extends React.Component {
    
    constructor(props){
        super(props)
        console.log('child constructor rendered');

        this.state = {
            userInfo :{
                name: 'Guru',
                ontact: 'guruhs',
                location: ' fsgsg'
            }
        }
        
    }
    
    
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/Guru270591');
        const json = await data.json();
        console.log(json);
           this.setState(this.state = {
            userInfo: json
           })
    }
 
    render (){
        console.log('child component rendered');
        const { name, contact, location } = this.state.userInfo;
        return (
            <div>
                <h1>Name: {name} </h1>
                <h2>Contact: {contact} </h2>
                <h3>Location: {location} </h3>
            </div>
        )
    }

}

export default UserClass;

 