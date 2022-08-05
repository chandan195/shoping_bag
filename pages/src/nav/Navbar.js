import React from "react";
import Nav from "./Nav";
import Link from "next/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import {
  faSearch,
  faHeart,
  faUser,
  
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";



function Navbar() {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor:"rgb(105, 116, 219)", display: "flex" }}
      >
        <div className="col-md-6">
          <h2 style={{ color: "white" }}>
            <Link href="/" >
                TANN TRIM
            </Link>
           </h2>
        </div>
        <div className="col-md-6" style={{paddingLeft: "15%"}}>
          <ul style={{ display: "flex" }}>
          
            <li>
              <Link href="#">
                <a>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: 30, color: "white" }}
              />
              </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: 30, color: "white" }}
              />
              </a>
              </Link>
            </li>
            <li>
              <Link  href="#">
                <a>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ fontSize: 30, color: "white" }}
              />
              </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{ fontSize: 30, color: "white" }}
              />
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "rgb(131, 122, 214)", }}>
        <Nav />
      </div>
    </>
  );
}

export default Navbar;
