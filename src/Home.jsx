import React from 'react';
import Img from './images/img1.png';
import { NavLink } from 'react-router-dom';
import Commmon from './Common';


const Home = () => {
    return (
        <>
            <Commmon
                name="Welcome to parallels"
                imgsrc={Img}
                visit="/Servics"
                btnname="Get Started"
            />

        </>
    );
}
export default Home;