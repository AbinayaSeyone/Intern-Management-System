import React, { useState } from "react";
import "./SidebarI.css";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData01 } from "../DataIntern";
// import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const SidebarI = () => {
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
        >
            <div className="row m-0">
                <div className="col-md-3">
                    <img
                        src="/profile.jpeg"alt="company logo"
                        width="80"
                        height="80"
                        className="rounded-circle me-2"
                    />
                </div>
                <p>Firstname Lastname</p>
            </div>


            <motion.div
                className="sidebar"
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ""}
            >


                <div className="menu">
                    {SidebarData01.map((item, index) => {
                        return (
                            <div
                                className={selected === index ? "menuItem active" : "menuItem"}
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                <item.icon />
                                <a href={item.path}>
                                    <span>{item.heading}</span>
                                </a>
                            </div>
                        );
                    })}

                </div>
            </motion.div>
        </div>
    );
};

export default SidebarI;
