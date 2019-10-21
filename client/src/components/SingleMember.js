import React from "react";

function singleMember(props) {
  return props.members.map((member, i) => (
    <div key={i}>
      <li>
        Member's name is: {member.name} as the: {member.position}{" "}
        <div>
          {" "}
          <img src={member.photo} alt="member" />
        </div>
      </li>
    </div>
  ));
}
export default singleMember;
