import '../styles/Experience.css'
import { useState } from 'react'

// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

function Experience() {
  return (
    <>
      <form action="post">
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" required />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input type="text" id="role" name="role" required />
        </div>
        <div>
          <label htmlFor="dateFrom">From</label>
          <input type="date" name="dateFrom" id="dateFrom" required />
        </div>
        <div>
          <label htmlFor="dateTo">To</label>
          <input type="date" name="dateTo" id="dateTo" required />
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <input type="text" name="notes" id="notes" />
        </div>
      </form>
    </>
  );
}

export default Experience;