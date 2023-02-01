import { React } from "react";

export default function MyWorks() {
    return (
        <div className="myWorks-wrapper container-fluid">
            <div className="row">
                <div className="pt-5 col-6 myWorks-text rounded-5">
                    <div className="myWorks-title">MY WORKS</div>
                    <div className="myWorks-projects">
                        <div className="myWorks-project">
                            <div>Pokemon Random Generator</div>
                            <p>
                                A web application that shows you random Pokémon
                                name, ID and image based on the Pokédex. It
                                utilizes PokeAPI to fetch relevant data.
                            </p>
                        </div>
                        <div className="myWorks-project">
                            <div>BOJIO</div>
                            <p>
                                A community driven platform for Singaporeans to
                                'jio' their beloved or to foster new
                                relationships. With BOJIO, users can expect to
                                keep in touch with the hottest events in
                                Singapore and have the flexibility to host and
                                join jios based on their hobbies/interests.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img
                        src="faces/face_myworks.png"
                        className="face-myworks"
                    ></img>
                </div>
            </div>
        </div>
    );
}
