import React from "react";
import contacts from "../contacts";

function Contact(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circleimg" src={props.src} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.mail}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Contact
        name={contacts[0].name}
        src={contacts[0].imgURL}
        tel={contacts[0].phone}
        mail={contacts[0].email}
      />
      <Contact
        name={contacts[1].name}
        src={contacts[1].imgURL}
        tel={contacts[1].phone}
        mail={contacts[1].email}
      />
      <Contact
        name={contacts[2].name}
        src={contacts[2].imgURL}
        tel={contacts[2].phone}
        mail={contacts[2].email}
      />
    </div>
  );
}

export default App;
