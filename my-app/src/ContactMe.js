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
                <div className="pt-5 col-6 contactMe-text rounded-5">
                    <div className="contactMe-title">CONTACT ME</div>
                    <div className="container">
                        <div className="row">
                            <div class="form-floating mb-3 contactMe-form col-6">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                ></input>
                                <label for="floatingInput">First Name</label>
                            </div>
                            <div class="form-floating mb-3 contactMe-form col-6">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                ></input>
                                <label for="floatingInput">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div class="form-floating mb-3 contactMe-form col-6">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                ></input>
                                <label for="floatingInput">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div class="form-floating contactMe-form">
                                <textarea
                                    class="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea"
                                ></textarea>
                                <label for="floatingTextarea">Comments</label>
                            </div>
                        </div>
                        <div className="row">
                            <button
                                type="button"
                                class="btn btn-primary btn-sm"
                            >
                                Small button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
