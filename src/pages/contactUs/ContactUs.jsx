import React, { useState } from "react";
import axios from "axios";
import AlertMsg from "../../components/AlertMsg";
import './ContactUs.css';

const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(null);
 
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");

    if (!firstName || !lastName || !email || !message) {
      showAlert("All fields are required.", `warning`);
      return;
    }

    if (!nameRegex.test(firstName)) {
      showAlert("Invalid first name format. Please enter your valid first name", `danger`);
      return;
    }
    if (!nameRegex.test(lastName)) {
      showAlert("Invalid last name format. Please enter your valid last name", `danger`);
      return;
    }

    if (!emailRegex.test(email)) {
     showAlert("Invalid email. Please enter a valid email", `danger`); 
      return;
    }

    if (message.length < 10) {
      showAlert("Message must be at least 10 characters long", `warning`); 
      return;
    }
    if (/^[0-9]+$/.test(message)) {
      showAlert("Message must contain letters", `warning`)
      return;
    }
    axios
      .post(
        "https://formcarry.com/s/DliUAS31yJ",
        {
          First_Name: firstName,
          Last_Name: lastName,
          Email: email,
          Message: message
        },
        {
          headers: {
            Accept: "application/json"
          }
        }
      )
      .then((res) => {
        if (res.data.code === 200) {
          showAlert("We've received your message. Thank you for contacting us!", "success");
        } else {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div className='container-fluid flex-column justify-content-start' id='contactUs'>

      {<AlertMsg alert={alert}/>} 

      <form className="form container d-flex justify-content-center flex-column gap-2 col-lg-7 col-12 p-lg-2 text-white text-center bg-opacity-10" onSubmit={handleSubmit}>

        <h4>
          Have some questions?
        </h4>

        <div className="form-group">
          <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          />
        </div>

        <div className="form-group">
          <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          />
        </div>

        <div className="form-group">
          <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </div>

        <div className="form-group">
          <textarea
          className="form-control"
          id="message"
          rows="4"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="button btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      
      </form>

    </div>
  );
};

export default ContactUs;
