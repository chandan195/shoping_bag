import Link from "next/link";
import React from "react";
import GetApi from "../../data/GetApi"
const Nav = () => {
  // <style jsx>{`
  

  // ul {
  //   list-style-type: none;
  //   margin: 0;
  //   padding: 0px;
  //   overflow: hidden;
  //   background-color: lightgray;
  // }
  
  // li {
  //   float: left;
  // }
  
  // li Link a {
  //   display: block;
  //   color: blue;
  //  font-size:20px;
  //   text-align: center;
  //   padding: 10px 20px;
  //   text-decoration: none;
  // }
  // .active{
  // background-color: gray;
  // color: white;
  // }
  // li Link a:hover {
  //   background-color: orange;
  //   color: white;
  // }
  // `}
 

  // </style>
  return (
    <div className="container-fluid" style={{ backgroundColor: "rgb(105, 116, 219)"}}>
      <div className="col-md-12" style={{ color: "white", display: "flex",paddingLeft: "25%" }}>
        <ul style={{ color: "white",display: "flex" }}>
          <li>
            <Link href="./Bags">
              <a>
                Bags
              </a>
            </Link>
          </li>
          <li>
            <Link href='./Travel'>
              <a>
              Travel
              </a>
            </Link>
          </li>
          <li>
            <Link href='./Access'>
              <a>
              Accesories
              </a>
            </Link>
          </li>
          <li>
          <Link href="./Gifting">  
              <a>
              Gifting
              </a>
            </Link>
          </li>
          <li>
          <Link href='./jewelory'>
              <a>
              Jewelery
              </a>
            </Link>
          </li>
         
        </ul>
        {/* <GetApi/> */}
      </div>
    </div>
  );
};

export default Nav;
