import React, {Component} from "react";
import about from "./../../res/images/about.jpg"
import biomont from "./../../res/images/biomont.png"
import iqfarma from "./../../res/images/iqfarma.png"
import oregon from "./../../res/images/oregon.png"
import radiadores from "./../../res/images/radiadores.png"
import gomelast from "./../../res/images/gomelast.png"
import laritza from "./../../res/images/laritza.png"
import renasa from "./../../res/images/renasa.png"
import texfina from "./../../res/images/texfina.png"

export default class Services extends Component {

    render() {
        return (
            <div>
            <div className="about-us-content">
                <div className="about-us-text">
                        <h1 style={{fontSize: "2.2rem", fontWeight:250}}>
                            Nuestra compañia
                        </h1>
                        <p>
                            LOGINET SAC es una organización de profesionales, dedicada a proveer soluciones y servicios
                            de alta tecnología orientados a al pequeña, mediana y gran empresa.</p>
                        <p>
                            La empresa tiene una experiencia de 20 años en el mercado ha mantenido durante estos años
                            una larga y exitosa relación de negocios con IBM del Perú S.A.
                        </p>
                        <p>
                            A fin de lograr los objetivos mencionados, nuestra empresa desde sus inicios se preocupó en
                            desarrollar una estructura de soporte y servicio de alto nivel, que nos permite obtener y
                            mantener clientes de renombrado prestigio, siendo reconocidos actualmente como una de las
                            empresas líderes en sus respectivos mercados.
                        </p>
                        <p>
                            LOGINET SAC cuenta con los profesionales altamente capacitados entre consultores, ingenieros
                            de sistemas, analistas y programadores con amplia experiencia en el manejo de las múltiples
                            plataformas que representamos.
                        </p>
                </div>
                    <div className="about-us-banner">
                        <img src={about} alt="" height="100%" style={{maxWidth:"100%",height:"100%", maxHeight:"400px"}}/>
                    </div>
            </div>
                <div style={{width: "100%", textAlign:"center", fontSize:"2rem", fontWeight:150, padding:"0 20px"}}>
                        Tenemos mas de 200 clientes en Peru y Mexico
                </div>
                <div className="about-us-clients">
                    <div>
                        <div className="about-us-banner">
                            <img src={biomont} alt="" height="100%" style={{height: "100px", maxWidth:"250px", maxHeight:"400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={iqfarma} alt="" height="100%" style={{maxWidth:"250px",height: "100px", maxHeight:"400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={radiadores} alt="" height="100%" style={{maxWidth:"250px",height: "100px", maxHeight:"400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner" style={{background:"black"}}>
                            <img src={gomelast} alt="" height="100%" style={{maxWidth:"250px",height: "100px", maxHeight:"400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={texfina} alt="" height="100%" style={{maxWidth:"250px",height: "100px", maxHeight:"400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={renasa} alt="" height="100%" style={{maxWidth:"250px",height: "100px", maxHeight:"400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={laritza} alt="" height="100%" style={{maxWidth:"250px",height: "100px", maxHeight:"400px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="about-us-banner">
                            <img src={oregon} alt="" height="100%" style={{maxWidth:"100%",height: "100px", maxHeight:"400px"}}/>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
};
