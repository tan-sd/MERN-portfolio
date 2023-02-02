import { React } from "react";

export default function ContactMe() {
    return (
        <div className="contactMe-wrapper container-fluid">
            <div className="row">
                <div className="col-6">
                    <img
                        src="images/faces/face_contactme.png"
                        className="face-contactme"
                    ></img>
                </div>
                <div className="col-6"></div>
            </div>

            <div className="row">
                <div className="contactMe-text rounded-5">
                    <div className="contactMe-title">CONTACT ME</div>
                    <div className="container contactMe-form">
                        <div className="row">
                            <div class="form-floating mb-3 col-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                ></input>
                                <label for="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3 col-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                ></input>
                                <label for="floatingInput">Email</label>
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
                                <label for="floatingTextarea">Message</label>
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
