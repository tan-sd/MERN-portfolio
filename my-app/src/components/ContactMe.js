import { React } from "react";

export default function ContactMe() {
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
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                ></input>
                                <label>Name</label>
                            </div>
                            <div className="form-floating mb-3 col-lg-6 col-12">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                ></input>
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea"
                                    style={{ height: 200, resize: `none` }}
                                ></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="row contactMe-btn float-end me-1">
                            <button
                                type="button"
                                className="btn p-2"
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
