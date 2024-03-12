import '../styles/Navbar.css'
import Button from './Button';
import { useState } from 'react';

function Navbar() {

  const [active, setActive] = useState(0);

  const handleButtonClick = (id: number) => {
    setActive(id);
  }

  return (
    <>
      <div id="nav">
        <div className="container">
          <h3>Create CV</h3>
        </div>
        <div className="container">
          <Button id={1} text="Personal Info" onClick={handleButtonClick} />
          <Button id={2} text="Education" onClick={handleButtonClick} />
          <Button id={3} text="Experience" onClick={handleButtonClick} />
        </div>

      </div>
    </>
  )
}


export default Navbar;