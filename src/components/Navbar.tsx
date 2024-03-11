import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      <div id="nav">
        <div className="container">
          <h3>Create CV</h3>
        </div>
        <div className="container">
          <button className="btn">Personal Info</button>
          <button className="btn">Education</button>
          <button className="btn">Experience</button>
        </div>

      </div>
    </>
  )
}


export default Navbar;