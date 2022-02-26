import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  label,
  link
}) => {
  return (
    <Link to={link}>{label}</Link>
  )
}

{/* <Link to="/">Home </Link>
      <Link to="/about">About Us </Link>
      <Link to="/shop">Shop Now </Link> */}

export default Button;