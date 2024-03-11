import '../styles/Name.css'
import { useState } from 'react'

// A section to add general information like name, email and phone number.

function Form() {
  return (
    <>
      <form action="post">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" name="phoneNumber" id="phoneNumber" required />
        </div>
      </form>
    </>
  );
}

export default Form;