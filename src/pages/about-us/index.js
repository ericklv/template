import React, {Component} from "react";

export default class AboutUs extends Component {

    render() {
        return (
            <div className="about-us-content">
                <div className="about-us-text">
                    <div>
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
                    <div className="about-us-img"/>
                </div>
                <div style={{width: "100%", textAlign:"center", fontSize:"2rem", fontWeight:150}}>
                        Tenemos mas de 200 clientes en Peru y Mexico
                </div>
            </div>
        )
    }
};
