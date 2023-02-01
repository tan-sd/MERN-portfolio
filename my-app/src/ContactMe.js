import { React } from "react";

export default function ContactMe() {
    return(
        <div className="contactMe-wrapper container-fluid">
             <div className="row">
                <div className="col-6">
                    <img src="faces/face_contactme.png" className="face-contactme"></img>
                </div>
                <div className="pt-5 col-6 contactMe-text rounded-5">
                    <div className="contactMe-title">CONTACT ME</div>
                </div>
            </div>
        </div>
    )
}