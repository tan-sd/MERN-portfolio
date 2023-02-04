import { React } from "react";

export default function MyWorks() {
    return (
        <div className="myWorks-wrapper container-fluid">
            <div className="row">
                <div className="col">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/faces/face_myworks.png`}
                        className="face-myworks"
                    ></img>
                </div>
            </div>

            <div className="row">
                <div className="pt-5 col-6 myWorks-text rounded-5">
                    <div className="myWorks-title">MY WORKS</div>
                    <div className="myWorks-projects">
                        <div className="myWorks-project">
                            <div className="myWorks-project-text">
                                <div style={{fontWeight: `bold`}}>My First Portfolio</div>
                                <div className="myWorks-project-img-hidden">
                                    <img src={`${process.env.PUBLIC_URL}/images/project/first-portfolio.jpg`}></img>
                                </div>
                                <p>
                                    The start of my web development journey. It was
                                    built using vanilla HTML, CSS and JavaScript.
                                </p>
                            </div>
                            <div className="project-btns">
                                <a
                                    href="https://tan-sd.github.io/"
                                    target="_blank"
                                    className="project-btn"
                                >
                                    Enter Site
                                </a>
                                <a
                                    href="https://github.com/tan-sd/tan-sd.github.io/"
                                    target="_blank"
                                    className="project-btn"
                                >
                                    Github
                                </a>
                            </div>
                            <hr style={{marginTop: 50}}></hr>
                        </div>
                        <div className="myWorks-project">
                            <div className="myWorks-project-text">
                                <div style={{fontWeight: `bold`}}>Pokemon Random Generator</div>
                                <div className="myWorks-project-img-hidden">
                                  <img src={`${process.env.PUBLIC_URL}/images/project/pokemon-random-generator.jpg`}></img>
                                </div>
                                <p>
                                    A web application that shows you random Pokémon
                                    name, ID and image based on the Pokédex. It
                                    utilizes PokeAPI to fetch relevant data.
                                </p>
                            </div>
                            <div className="project-btns">
                                <a
                                    href="https://tan-sd.github.io/pokemon-random-generator/"
                                    target="_blank"
                                    className="project-btn"
                                >
                                    Enter Site
                                </a>
                                <a
                                    href="https://github.com/tan-sd/pokemon-random-generator"
                                    target="_blank"
                                    className="project-btn"
                                >
                                    Github
                                </a>
                            </div>
                            <hr style={{marginTop: 50}}></hr>
                        </div>
                        <div className="myWorks-project">
                            <div className="myWorks-project-text">
                                <div style={{fontWeight: `bold`}}>BOJIO</div>
                                <div className="myWorks-project-img-hidden">
                                    <img src={`${process.env.PUBLIC_URL}/images/project/bojio.jpg`}></img>
                                </div>
                                <p>
                                    A community driven platform for Singaporeans to
                                    'jio' their beloved or to foster new
                                    relationships. With BOJIO, users can expect to
                                    keep in touch with the hottest events in
                                    Singapore and have the flexibility to host and
                                    join jios based on their hobbies/interests.
                                </p>
                            </div>
                            <div className="project-btns">
                                <a
                                    href="https://bojio.netlify.app/"
                                    target="_blank"
                                    className="project-btn"
                                >
                                    Enter Site
                                </a>
                                <a
                                    href="https://github.com/tan-sd/wad2-project"
                                    target="_blank"
                                    className="project-btn"
                                >
                                    Github
                                </a>
                            </div>
                            <hr style={{marginTop: 50}}></hr>
                        </div>
                    </div>
                </div>
                <div
                    className="pt-5 col-6 myWorks-projects-img
                "
                >
                    <div className="myWorks-project-img">
                        <img src={`${process.env.PUBLIC_URL}/images/project/first-portfolio.jpg`}></img>
                    </div>
                    <div className="myWorks-project-img">
                        <img src={`${process.env.PUBLIC_URL}/images/project/pokemon-random-generator.jpg`}></img>
                    </div>
                    <div className="myWorks-project-img">
                        <img src={`${process.env.PUBLIC_URL}/images/project/bojio.jpg`}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
