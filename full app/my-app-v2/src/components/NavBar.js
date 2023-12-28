import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";

const NavBar = () => {
  const location = useLocation();

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
      <>
        <Menu.Item key="/">
          <Link to="/">About Us</Link>
        </Menu.Item>
        <Menu.Item key="/location_and_results">
          <Link to="/location_and_results">Location and Results</Link>
        </Menu.Item>
        <Menu.Item key="/reg_page">
          <Link to="/reg_page">Registration</Link>
        </Menu.Item>
        <Menu.Item key="/login">
          <Link to="/login">Log in</Link>
        </Menu.Item>
      </>
    </Menu>
  );
};

export default NavBar;
