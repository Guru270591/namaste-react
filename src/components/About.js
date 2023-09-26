import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    console.log("parent constructor rendered");
  }
  componentDidMount() {
    console.log("parent component mount");
  }
  render() {
    console.log("parent component rendered");
    return (
      <div>
        <User
          name={"Gurudayal Singh"}
          contact={"gurudayal2k9@gmail.com"}
          location={"Bangalore"}
        />
        <h3> Class Based Component return </h3>
        <UserClass
          name={"Gurudayal Singh"}
          contact={"gurudayal2k9@gmail.com"}
          location={"Bangalore"}
        />
        <UserClass
          name={"Gurudayal Singh"}
          contact={"gurudayal2k9@gmail.com"}
          location={"Bangalore"}
        />
      </div>
    );
  }
}

export default About;
