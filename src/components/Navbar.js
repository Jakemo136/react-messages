import React from 'react';

const Navbar = () => {
  return(
    <div>
      <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand text-light">A Place To Send Secret Messages Between Frandz</a>
        <form class="form-inline">
        <button class="btn btn-outline-light " type="button">If you click me, I'll let you write a message</button>
        </form>
      </nav>
    </div>
  )
}

export default Navbar