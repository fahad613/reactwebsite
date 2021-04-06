import React from 'react';
import Commmon from './Common';
import Img from './images/img1.png';


const About = () => {
    return (
        <>
            <Commmon
                name="Welcom to About page"
                imgsrc={Img}
                visit="/Content"
                btnname="Contact Now"
            />
        </>
    );
}
export default About;