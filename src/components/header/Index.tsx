import React, { FC } from 'react'
import { StyledHeader } from './Styled';
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <StyledHeader>
      <nav className="container">
        <div className="header">
          <div className="logo">

          </div>
          <div className="header-user">
            <div className="login">
              <Link to="/login">
                Login
              </Link>
            </div>
            <div className="register">
              <Link to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </StyledHeader>
  )
}
export default Header;