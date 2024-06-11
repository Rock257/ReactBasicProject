import React, { useState } from "react";
import "./form.css";

export default function FormProject() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [lang, setLang] = useState({
    english: true,
    hindi: false,
    german: false,
  });

  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [seloption, setSeloption] = useState("");
  const [about, setAbout] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(contact);
    console.log(gender);
    console.log(lang);
    console.log(seloption);
    console.log(resume);
    console.log(url);
    console.log(about);
    // console.log(e.target.value)
  }

  const handleLangChnage = () => {
    setLang((prev) => ({
      ...prev,
      [lang]: !prev[lang],
    }));
  };

  function handleReset(){
    setFirstName('')
    setLastName('')
    setEmail('')
    setContact('')
    setGender('')
    // setLang('')
    setSeloption('')
    setResume('')
    setUrl('')
    setAbout('')
  }


  return (
    <>
      <div className="main">
        <div className="submain">
          <h1>Let Create Form In React</h1>
        </div>
        <fieldset>
          <form action="" method="get">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Please enter first name"
            />
            <br />
            <label htmlFor="lastname">Last Name </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="enter last name"
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter email"
            />
            <br />
            <label htmlFor="contact">Contact</label>
            <input
              type="number"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="enter contact number"
            />
            <br />
            <label htmlFor="gender">Gender</label>
            <br />
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              checked={gender === "other"}
              onC
              hange={(e) => setGender(e.target.value)}
            />{" "}
            Other
            <br />
            <label htmlFor="lang">Your Best Communication Language</label>
            <br />
            <input
              type="checkbox"
              name="lang"
              checked={(lang.english = true)}
              onChange={(e) => setLang(e.target.value)}
            />{" "}
            English
            <input
              type="checkbox"
              name="lang"
              checked={(lang.hindi = true)}
              onChange={(e) => setLang(e.target.value)}
            />{" "}
            Hindi
            <input
              type="checkbox"
              name="lang"
              checked={(lang.german = true)}
              onChange={(e) => setLang(e.target.value)}
            />
            German
            <br />
            <label htmlFor="file">Upload Resume</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => setResume(e.target.files[0])}
              placeholder="Enter Upload File"
              required
            />
            <br />
            <label htmlFor="url">Enter URL</label>
            <input
              type="url"
              name="url"
              id=" url"
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL"
              required
            />
            <br/>
            <label htmlFor="">Select Your Choice</label>
            <select
              name="select"
              id="select"
              value={seloption}
              onChange={(e) => setSeloption(e.target.value)}
            >
              <option value="" disabled selected={seloption=== ''}>Select Your Answer</option>
              <optgroup label="Beginers">
                 <option value="1">HTML</option>
                 <option value="2">CSS</option>
                 <option value="3">J</option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="7">MongoDB</option>
              </optgroup>
            </select>
            <br /><br />
            <textarea name="about" id="about" 
            rows='10' cols='20'
            >
              About Your Self
            </textarea>
            <br />
            <br />
            <button onClick={()=>handleReset()}>Reset Form</button>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
