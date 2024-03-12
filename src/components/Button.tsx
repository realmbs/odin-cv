import '../styles/Button.css'
import { useState } from 'react'

function Button({ id, text, onClick }) {
  const [active, setActive] = useState(0);
  return (
    <button className="btn" onClick={() => onClick(id)}>
      {text}
    </button>
  );
}

export default Button;