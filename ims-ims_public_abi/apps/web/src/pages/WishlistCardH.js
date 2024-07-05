import React from "react";
import NavBar from "../components/NavBar";
import ProfileSelection from "../components/ProfileSelection";
import user from "../images/userH.png";
import Internpoolcard from "../components/Internpoolcard";

function WishlistCardH(){
    return(
        <div className="container">
            <div  className="card">
                <div className="card-title green" >Whishlist</div>
                <div className="container mt-4">

                    <Internpoolcard
                        iname="Abinaya Seyone"
                        skills="Javascript"
                        uniname="University of Moratuwa"
                        faculty="IT"
                        img="https://i.pravatar.cc/150?img=1"

                    ></Internpoolcard>

                    <Internpoolcard
                        iname="Abinaya Seyone"
                        skills="Javascript"
                        img="https://i.pravatar.cc/150?img=2"
                    ></Internpoolcard>
                </div>


            </div>
        </div>
    );

};
export default WishlistCardH;
