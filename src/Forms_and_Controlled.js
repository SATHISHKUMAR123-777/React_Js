import React, { useState } from "react";


export const Forms_Component = () => {

  const [name, Setname] = useState();
  const [mail, SetMail] = useState();
  const [phone, Setphone] = useState();
  const [password, Setpassword] = useState();
  const [Description, SetDescription] = useState();

  // Error
  const [Error, SetNameError] = useState()
  const [MailError, SetMailError] = useState()
  const [phoneError, SetPhoneerror] = useState()
  const [passwordError, Setpassworderror] = useState()

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("UserName:", name);
    console.log("Email Address:", mail);
    console.log("Phone Number:", phone);
    console.log("password:", password);
    console.log("Description", Description);
  }

  const handleName = (event) => {
    const value = (event.target.value);
    Setname(value);
    if (value === "Sathish") {
      SetNameError('Correct');
    }
    else {
      SetNameError('incorrect');
    }
  }

  const handleEmail = (event) => {
    const values = (event.target.value);
    SetMail(values);
    if (values === "Sathish@gmail.com") {
      SetMailError('Correct');
    }
    else {
      SetMailError('incorrect');
    }
  }


  const handlephone = (event) => {
    const values = (event.target.value);
    Setphone(values);
    if (values === "7558163869") {
      SetPhoneerror('Correct');
    }
    else {
      SetPhoneerror('incorrect');
    }
  }

  const handlepassword = (event) => {
    const values = (event.target.value)
    Setpassword(values);
    if (values === "Dhoni@3307") {
      Setpassworderror('Correct');
    }
    else {
      Setpassworderror('incorrect');
    }
  }




  const handledescription = (event) => {
    SetDescription(event.target.value);
  }


  return (
    <>
      <h1 className="mt-5 justify-content-center">React form</h1>

      <form onSubmit={handlesubmit}>
        <div className="d-flex flex-row mt-5">
          <div className="col-lg-6  d-flex justify-content-end">

            <label>First Name:</label>
            <input type="text"
              value={name}
              onChange={handleName}
            />
            {
              Error &&
              <span style={{ color: 'green' }}>{Error}
              </span>
            }
          </div>

          <div className="col-lg-6 d-flex justify-content-start">

            <label for="email">Email Address:</label>
            <input type="email"
              value={mail}
              onChange={handleEmail}
            />
            {
              MailError &&
              <span style={{ color: 'green' }}>{MailError}
              </span>
            }
          </div>
        </div>
        <div className="d-flex flex-row mt-5">

          <div className="col-lg-6  d-flex justify-content-end">
            <label>Phone number:</label>
            <input type="number"
              value={phone}
              onChange={handlephone}
            />
            {
              phoneError &&
              <span style={{ color: 'green' }}>{phoneError}
              </span>
            }

          </div>
          <div className="col-lg-6 d-flex justify-content-start">

            <label>Password:</label>
            <input type="password"
              value={password}
              onChange={handlepassword}
            />
            {

              passwordError &&
              <span style={{ color: 'green' }}>{
                passwordError}
              </span>
            }
          </div>
        </div>
        <div className="d-flex flex-row mt-5">

          <div className="col-lg-12 d-flex justify-content-center">
            <label>Description:</label>
            <textarea type="text"
              value={Description}
              onChange={handledescription}> </textarea>
          </div>
        </div>
        <div className="mt-3">
          <button type="submit" class="btn btn-primary" >Submit</button>
        </div>
      </form>
    </>
  );
}