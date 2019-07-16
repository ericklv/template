import React, {Component} from "react";
import biomont from "./../../res/images/biomont.png"
import iqfarma from "./../../res/images/iqfarma.png"
import oregon from "./../../res/images/oregon.png"
import radiadores from "./../../res/images/radiadores.png"
import gomelast from "./../../res/images/gomelast.png"
import laritza from "./../../res/images/laritza.png"
import renasa from "./../../res/images/renasa.png"
import texfina from "./../../res/images/texfina.png"

export default class Clients extends Component {

    render() {
        return (
            <div>
                <div className="about-us-content">
                    <div className="clients-text">
                        <h1 style={{fontSize: "2.2rem", fontWeight: 250}}>
                            Nuestros Clientes
                        </h1>
                        <p style={{fontSize: "1.2rem"}}>
                            La calidad y la excelencia de sus producto y servicio en LOGINET SAC han sido el factor
                            clave en su política de servicio al cliente durante años.
                            La siguiente es una revisión rápida de algunos de los clientes más importantes de la
                            compañía:
                        </p>
                    </div>
                </div>
                <div style={{width: "100%", textAlign: "center", fontSize: "1.3rem", fontWeight: 150, padding: "0 20px"}}>
                    Tenemos mas de 200 clientes en Peru y Mexico
                </div>
                <div className="about-us-clients">
                    <div>
                        <div className="about-us-banner">
                            <img src={biomont}
                                 alt=""
                                 height="100%"
                                 style={{height: "100px", maxWidth: "250px", maxHeight: "400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={iqfarma}
                                 alt=""
                                 height="100%"
                                 style={{maxWidth: "250px", height: "100px", maxHeight: "400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={radiadores}
                                 alt=""
                                 height="100%"
                                 style={{maxWidth: "250px", height: "100px", maxHeight: "400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner"
                             style={{background: "black"}}>
                            <img src={gomelast}
                                 alt=""
                                 height="100%"
                                 style={{maxWidth: "250px", height: "100px", maxHeight: "400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={texfina}
                                 alt=""
                                 height="100%"
                                 style={{maxWidth: "250px", height: "100px", maxHeight: "400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={renasa}
                                 alt=""
                                 height="100%"
                                 style={{maxWidth: "250px", height: "100px", maxHeight: "400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={laritza}
                                 alt=""
                                 height="100%"
                                 style={{maxWidth: "250px", height: "100px", maxHeight: "400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={oregon}
                                 alt=""
                                 height="100%"
                                 style={{maxWidth: "100%", height: "100px", maxHeight: "400px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
