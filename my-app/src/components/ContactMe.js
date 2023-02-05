import React, { useState } from "react";
import axios from "axios";

export default function ContactMe() {

    const [input, setInput] = useState({
        sender: '',
        message: '',
        email: '',
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name] : value
            }
        })
    }

    const date = new Date()

    function handleClick(event) {
        event.preventDefault();
        console.log(input);
        const newMessage = {
            name: input.sender,
            text: input.message,
            email: input.email,
            date: date,
        }

        axios.post('http://localhost:5000/api/v1/data/contact', newMessage);
    }

    return (
        <div className="contactMe-wrapper container-fluid">
            <div className="row">
                <div className="col">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/faces/face_contactme.png`}
                        className="face-contactme"
                        alt="face-contactme"
                    ></img>
                </div>
            </div>

            <div className="row">
                <div className="contactMe-text rounded-5">
                    <div className="contactMe-title">CONTACT ME</div>
                    <div className="container contactMe-form">
                        <div className="row">
                            <div className="form-floating mb-3 col-lg-6 col-12">
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    className="form-control"
                                    id="sender"
                                    name="sender"
                                    value={input.sender}
                                ></input>
                                <label>Name</label>
                            </div>
                            <div className="form-floating mb-3 col-lg-6 col-12">
                                <input
                                    onChange={handleChange}
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={input.email}
                                ></input>
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-floating">
                                <textarea
                                    onChange={handleChange}
                                    id="message"
                                    className="form-control"
                                    style={{ height: 200, resize: `none` }}
                                    value={input.message}
                                    name="message"
                                ></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="row contactMe-btn float-end me-1">
                            <button
                                type="button"
                                className="btn p-2"
                                onClick={handleClick}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
