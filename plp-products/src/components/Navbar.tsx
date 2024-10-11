import React from "react";
import Search from "./Search";

const Navbar: React.FC = () => {
  return(
    <nav className="navbar">
      <div className="nav__menu">
        <ul>
          <li><img className="nav__logo" src="https://firebasestorage.googleapis.com/v0/b/proyectos-web-565ae.appspot.com/o/zapatillas.png?alt=media&token=fbc801b2-b189-4ca5-9bc3-4417d11145ae" alt="Tenis" /></li>
          <li>Casuales</li>
          <li>Tenis</li>
          <li>Nuevos</li>
          <li>Clasicos</li>
        </ul>
      </div>
      <div className="nav__compras">
        <ul>
          <li>
            <svg width="24px" height="24px" viewBox="0 0 16 16" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#FFFFFF"/>
              <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#FFFFFF"/>
            </svg>
          </li>
          <li>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.25 18.75C11.25 19.58 10.58 20.25 9.75 20.25C8.92 20.25 8.25 19.58 8.25 18.75C8.25 17.92 8.92 17.25 9.75 17.25C10.58 17.25 11.25 17.92 11.25 18.75ZM16.25 17.25C15.42 17.25 14.75 17.92 14.75 18.75C14.75 19.58 15.42 20.25 16.25 20.25C17.08 20.25 17.75 19.58 17.75 18.75C17.75 17.92 17.08 17.25 16.25 17.25ZM20.73 7.68L18.73 15.68C18.65 16.01 18.35 16.25 18 16.25H8C7.64 16.25 7.33 15.99 7.26 15.63L5.37 5.25H4C3.59 5.25 3.25 4.91 3.25 4.5C3.25 4.09 3.59 3.75 4 3.75H6C6.36 3.75 6.67 4.01 6.74 4.37L7.17 6.75H20C20.23 6.75 20.45 6.86 20.59 7.04C20.73 7.22 20.78 7.46 20.73 7.68ZM19.04 8.25H7.44L8.62 14.75H17.41L19.04 8.25Z" fill="#FFFFFF"/>
            </svg>
          </li>
        </ul>
        <Search/>
      </div>
    </nav>
  )
}

export default Navbar