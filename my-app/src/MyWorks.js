import { React } from "react";

export default function MyWorks() {
    return (
        <div className="myWorks-wrapper container-fluid">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <img
                        src="images/faces/face_myworks.png"
                        className="face-myworks"
                    ></img>
                </div>
            </div>

            <div className="row">
                <div className="pt-5 col-6 myWorks-text rounded-5">
                    <div className="myWorks-title">MY WORKS</div>
                    <div className="myWorks-projects">
                        <div className="myWorks-project">
                            <div>My First Portfolio</div>
                            <p>
                                The start of my web development journey. It was
                                built by vanilla HTML, CSS and JavaScript.
                            </p>
                            <div class="project-btns">
                                <a
                                    href="https://tan-sd.github.io/"
                                    target="_blank"
                                    class="project-btn"
                                >
                                    Enter Site
                                </a>
                                <a
                                    href="https://github.com/tan-sd/tan-sd.github.io/"
                                    target="_blank"
                                    class="project-btn"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className="myWorks-project">
                            <div>Pokemon Random Generator</div>
                            <p>
                                A web application that shows you random Pokémon
                                name, ID and image based on the Pokédex. It
                                utilizes PokeAPI to fetch relevant data.
                            </p>
                            <div class="project-btns">
                                <a
                                    href="https://tan-sd.github.io/pokemon-random-generator/"
                                    target="_blank"
                                    class="project-btn"
                                >
                                    Enter Site
                                </a>
                                <a
                                    href="https://github.com/tan-sd/pokemon-random-generator"
                                    target="_blank"
                                    class="project-btn"
                                >
                                    Github
                                </a>
                            </div>
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
                            <div class="project-btns">
                                <a
                                    href="https://bojio.netlify.app/"
                                    target="_blank"
                                    class="project-btn"
                                >
                                    Enter Site
                                </a>
                                <a
                                    href="https://github.com/tan-sd/wad2-project"
                                    target="_blank"
                                    class="project-btn"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="pt-5 col-6 myWorks-projects-img
                "
                >
                    <div className="myWorks-project-img">
                        <img src="images/project/first-portfolio.jpg"></img>
                    </div>
                    <div className="myWorks-project-img">
                        <img src="images/project/pokemon-random-generator.jpg"></img>
                    </div>
                    <div className="myWorks-project-img">
                        <img src="images/project/bojio.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
