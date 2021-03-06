import React from 'react';

const Navbar = ({toggleCompose}) => {
  return(
    <div>
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-light">A Place To Send Secret Messages Between Frandz</a>
        <form className="form-inline">
        <button className="btn btn-outline-light " type="button" onClick={e=>toggleCompose("toggleCompose")}>If you click me, I'll let you write a message</button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar