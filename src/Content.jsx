import React, { useState } from 'react';

const Content = () => {

    const [data, setData] = useState({
        name: "",
        phone: "",
        address: "",
        msg: "",
    });

    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((prevalue) => {
            return{
                ...prevalue,
                [name]:value,
            }
        })


    }
    const fromSubmit = (e) => {

        e.preventDefault();
        alert(
                `My Name is ${data.name}.My Mobile Number is ${data.phone}. My Address is ${data.address} `

        );

    }
    return (
        <>
            <h1 className="text-center my-4">Contact Us</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={fromSubmit}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name: </label>
                                <input
                                    name="name"
                                    value={data.name}
                                    onChange={inputEvent}
                                    type="text" class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone: </label>
                                <input
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    type="text" class="form-control"
                                    id="exampleFormControlInput1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Address:</label>
                                <input
                                    name="address"
                                    value={data.address}
                                    onChange={inputEvent}
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="" />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Description:</label>
                                <textarea
                                    name="message"
                                    value={data.msg}
                                    onChange={inputEvent}
                                    class="form-control"
                                    id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="">
                                <button type="submit" className="btn btn-outline-info">Sunmit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Content;