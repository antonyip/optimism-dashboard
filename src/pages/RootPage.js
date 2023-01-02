import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../css/output.css";
import "../css/style.css";
import { Row, Container } from "reactstrap";

export default function RootPage() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <div
        className={`sidebar text-white pe-4 pb-3 ${
          collapsed ? "close" : "open"
        }`}
      >
        <Container className="p-4">
          {/* Sidebar Title */}
          <Row className="items-stretch py-2">
            <NavLink className="flex flex-row" to={"/"}>
              <img src="./img/optimism-ethereum-op-logo-min.png" alt="" /><p className="px-2 h5">Optimism</p>
            </NavLink>
          </Row>
          <hr></hr><br />
          {/* Sidebar Items */}
          <Row className="items-stretch py-2">
            <NavLink className="flex items-center flex-row" to={"/"}>
              <i class="fa fa-money-check"></i><p className="px-2">Summary</p>
            </NavLink>
          </Row>
          <Row className="items-stretch py-2">
            <NavLink className="flex items-center flex-row" to={"/Blockchain"}>
              <i className="fa fa-chart-bar"></i><p className="px-2">Blockchain</p>
            </NavLink>
          </Row>
          <Row className="items-stretch py-2">
            <NavLink className="flex items-center flex-row" to={"/Speed"}>
              <i className="fa fa-tachometer-alt"></i><p className="px-2">Speed</p>
            </NavLink>
          </Row>
          <Row className="items-stretch py-2">
            <NavLink className="flex items-center flex-row" to={"/Users"}>
              <i className="fa fa-keyboard"></i><p className="px-2">Users</p>
            </NavLink>
          </Row>
          <Row className="items-stretch py-2">
            <NavLink className="flex items-center flex-row" to={"/Fees"}>
              <i className="fa fa-table"></i><p className="px-2">Fees</p>
            </NavLink>
          </Row>
          <Row className="items-stretch py-2">
            <NavLink className="flex items-center flex-row" to={"/About"}>
              <i className="fa fa-info-circle"></i><p className="px-2">About Me</p>
            </NavLink>
          </Row>
          <Row className="items-stretch py-2">
            <NavLink className="flex items-center flex-row" to={"/Resources"}>
              <i className="fa fa-map-marker-alt"></i><p className="px-2">Resources</p>
            </NavLink>
          </Row>
        </Container>
      </div>
      <div className="md:hidden grid grid-cols-1 bg-black p-2 ">
        <button
          className="bg-gray-800 text-white p-2 rounded flex flex-row-reverse"
          onClick={() => toggleNavbar()}
        >
          <p className="p-2">Menu</p>
        </button>
      </div>
      <div className="content p-3 items-start">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
