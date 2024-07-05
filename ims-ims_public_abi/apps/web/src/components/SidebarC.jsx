import React, { useState } from "react";
import "./SidebarC.css";
// import Logo from "../imgs/eloes.jpg";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const SidebarC = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <div
      // className="d-flex flex-column flex-shrink-0  p-3 "
      // style={{ width: "250px", height: "90vh", background: "#E2E2E2" }}
    >
      <div className="row m-0">
        <div className="col-md-3">
          <img
            src=" https://api.freelogodesign.org/assets/thumb/logo/6294672_400.png?t=637945524870000000"
            className="rounded"
            style={{ height: "60px" }}
          />
        </div>
      </div>
      {/* <div className="row"> */}

      {/* <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div> */}
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        {/* <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          El<span>o</span>es
        </span>
      </div> */}

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          {/* <div className="menuItem">
          <UilSignOutAlt />
        </div>  */}
        </div>
      </motion.div>
    </div>
    // </div>
  );
};

export default SidebarC;
