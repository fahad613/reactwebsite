import React from 'react';
import Card from './card';
import CardData from './Carddata'

const Services = () => {
    return (
        <>
            <h1 className="text-center my-4">Our Services</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row ">
                        {
                                CardData.map((val, index) =>{
                                    return <Card key={index} imgsrc={val.imgsrc} title={val.title}/>
                                })
                        }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Services;