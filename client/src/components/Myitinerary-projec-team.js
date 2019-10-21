import React from "react";
import SingleMember from "./SingleMember";
import Sabrina from "../assets/SabrinaMiller.png";
import Luke from "../assets/LukeWilliams.png";
import Martin from "../assets/MartinWright.png";
class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      membersName: [
        { name: "Anika van deBerg", position: "boss", photo: "null" },
        { name: "Sabrina Miller", position: "Product Owner", photo: Sabrina },
        {
          name: "Martin Wright",
          position: "Technical Consultant",
          photo: Martin
        },
        { name: "Luke Williams", position: "Scrum Master", photo: Luke },
        { name: "Sai Patel", position: "UX Designer", photo: "null" }
      ]
    };
  }
  render() {
    return (
      <ul>
        <SingleMember members={this.state.membersName} />
      </ul>
    );
  }
}

export default Members;
