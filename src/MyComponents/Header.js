import React from 'react'
import propTypes from 'prop-types'
import {
  Link,
  link
}
from 'react-router-dom';

//replace href= with to=
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">Help</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

//Default Props...

Header.defaultProps ={
  //When user has not entered anything ... (like title) this is by default..
  title: "Your Title Here..",
  searchBar: true
  //If in header file the header's title is not mentioned then this will be visible..
}

Header.propTypes ={
  title: propTypes.string,
  searchBar: propTypes.bool.isRequired
//by writing this in my code it will specify the value of the prop's title should be a string .. If by any chance a number is being visible then it will give error or warning in console window....
//And with this way  it becomes easy to finding bugs in code .. 
//It makes our code robust..

/*eg : in App.js 
 return (
 <> 
 <Header title = "My List" searchBar={false}/> </>)

 and here if this My List gets replaced with a number it  will give an error..
*/
}



/*
{ props.searchBar? <form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-outline-success" type="submit">Search</button>
</form> : "no searchbar"}*/
