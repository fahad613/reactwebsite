import React from 'react';
import Img from './images/img-12.png';

const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 my-3">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="pic"  height="250px"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>


        </>
    );
}
export default Card