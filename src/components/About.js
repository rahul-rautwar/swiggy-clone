import React from "react";
import User from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        About Us
        <div>
          LoggedIn User:
          {/* reading the context value in class based component */}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h2 className="font-bold">{loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
        <User name="Rahul Rautwar"></User>
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       About
//       <User name="Rahul Rautwar"></User>
//     </div>
//   );
// };

export default About;
