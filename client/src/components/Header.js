import React from 'react';
import { GoRepo } from "react-icons/go";
import './Header.scss';

const Header = ({ title, children }) => <div className="Header">
  <h2> <GoRepo/> { title }</h2>
  <div className="container">
    { children }
  </div>
</div>

export default Header;