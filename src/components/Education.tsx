import '../styles/Education.css'
import { useState } from 'react'

// A section to add your educational experience (school name, title of study and date of study)

function Education() {
  return (
    <>
      <form action="post">
        <div>
          <label htmlFor="schoolName">School Name</label>
          <input type="text" id="schoolName" name="schoolName" required />
        </div>
        <div>
          <label htmlFor="fieldOfStudy">Field of Study</label>
          <input type="text" id="fieldOfStudy" name="fieldOfStudy" required />
        </div>
        <div>
          <label htmlFor="gradePointAvg">GPA</label>
          <input type="number" name="gradePointAvg" id="gradePointAvg" required />
        </div>
        <div>
          <label htmlFor="graduationDate">Graduation Date</label>
          <input type="text" id="graduationDate" name="graduationDate" required />
        </div>
      </form>
    </>
  );
}

export default Education