import React, {Component} from "react";
import {Button} from "antd";
import ant from "./../../res/images/ant.png";

export default class Home extends Component {

    render() {
        return (
            <div className="home-content">
                <div className="home-banner banner-background">
                    <div className="home-banner-ant">
                        <div className="home-banner-text">
                            <h5>IBM Partner World</h5>
                            <h2 style={{fontSize: "2.5rem"}}>ANT ERP</h2>
                            <p>Por fin un ERP Industrial de Manufactura y Servicio al
                                alcance de las PYMES.</p>
                            <Button style={{width: "100px"}}>Leer mas</Button>
                        </div>
                    </div>
                    <div className="home-banner-image">
                        <img src={ant}
                             alt="Logo"/>
                    </div>
                </div>
                <div className="home-sub-content">
                    <div className="home-sub-info ibm-cloud-background">
                        <div>
                            <h2 style={{width: "60%"}}>Esto no es solo una nube es <b>IBM Cloud.</b></h2>
                            <p style={{width: "60%"}}>IBM Cloud es la nube para un negocio más inteligente En ella han
                                confiado miles de
                                empresas de más de 20 industrias por su proceso de cambio más rápido y seguro a
                                la nube.</p>
                            <Button style={{width: "100px"}}>Leer mas</Button>
                        </div>
                    </div>
                    <div className="home-sub-info ia-cloud-background">
                        <div>
                            <h2 style={{width: "80%"}}>Ingrese al futuro de los negocios <b>Infraestructura de la IA de
                                IBM</b></h2>
                            <p style={{width: "60%"}}>La tecnología de IA se ha movido de la ciencia ficción hacia la
                                realidad en los negocios.
                                Para hacer frente a los desafíos actuales y prepararse para el futuro, son necesarias
                                soluciones de IA que se integren con su infraestructura y su estrategia de datos .</p>
                            <Button style={{width: "100px"}}>Leer mas</Button>
                        </div>
                    </div>
                </div>
                <div className="home-sub-services">
                    <div>
                        <h2>
                            Soporte BM DB2
                        </h2>
                        <p>
                            Contamos con técnicos en este software que dan soporte a numerosas instalaciones diariamente
                        </p>
                    </div>
                    <div>
                        <h2>
                            Soporte y Capacitación ANT
                        </h2>
                        <p>
                            Tenemos consultores y Personal técnico especializado que realizan estas tareas diariamente
                            en diversos tipos de industrias.
                        </p>
                    </div>
                    <div>
                        <h2>
                            Consultoría ANT en Procesos Industriales
                        </h2>
                        <p>
                            Tenemos un área de Consultoría especializada en procesos Industriales y empresas de
                            Servicio.
                        </p>
                    </div>
                    <div>
                        <h2>
                            Soporte Softlayer
                        </h2>
                        <p>
                            Nuestros Técnicos se encargan de gestionar las labores de servicio dentro del ambiente
                            Softlayer .
                        </p>
                    </div>
                    <div>
                        <h2>Financiamiento Loginet</h2>
                        <p>
                            Contamos con una oferta de Financiamiento directo para la adquisición de sus servicios.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};