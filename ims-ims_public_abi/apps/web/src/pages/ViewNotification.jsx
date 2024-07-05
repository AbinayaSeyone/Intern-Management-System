import React from 'react';
import NavBar from '../components/NavBar';
import SidebarI from "../components/SidebarI";

const VewNot = () => {
    return (

        <div>
            <div><NavBar/></div>

            <div className='row'>
                <div className='col-md-3'> <SidebarI/></div>
                <div className='col-md-9'></div>
            </div>


        </div>
    );
}

export default VewNot;