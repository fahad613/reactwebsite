import React from 'react';
import Img from './images/img1.png';
import { NavLink } from 'react-router-dom';


const Commmon = (props) => {
    return (
        <>
            <section className=" d-flex align-items-center">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className="text-info">parallels Theam</strong> </h1>
                                    <h2 className="talent mt-3">we are the team of talented developer making website</h2>
                                    <NavLink to={props.visit} className="btn btn-outline-info btn-get mt-3">{props.btnname}</NavLink>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2">
                                    <img src ={props.imgsrc} className ="d-block mx-auto" width="90%"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Commmon ;