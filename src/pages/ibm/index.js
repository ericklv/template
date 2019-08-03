import React, {Component} from "react";
import ant from "./../../res/images/ant.jpg"
import {Icon} from "antd";

export default class Ibm extends Component {

    render() {
        return (
            <div className="ibm-content">
                <div className="ibm-content-text">
                    <div className="ant-text">
                        <h1 style={{fontSize: "2.2rem", fontWeight: 250, color: "#008571"}}>
                            IBM Cloud
                        </h1>
                        <p>
                            IBM Cloud : es la solución líder del sector en infraestructura Cloud - interconectada,
                            inteligente e instrumentada, otorgando a IBM Cloud funcionalidades exclusivas. Ofrece un
                            motor de alto rendimiento —servidores bare metal; dispositivos de seguridad, redes y
                            almacenamiento, etc...— desplegado en 40 centros de datos de todo el mundo.
                            Este motor queda ensamblado mediante una arquitectura de red avanzada que cubre (pero
                            segrega de forma segura) Internet público, una red privada y una red de gestión interna.
                        </p>
                        <p>
                            Todo ello está conectado y controlado mediante un único sistema de gestión integral. En el
                            mercado actual no hay otra plataforma construida con el nivel de inteligencia que se ha
                            integrado en la plataforma de Softlayer. Las potentes APIs (con más de 1.600 funciones)
                            permiten a los clientes programar sus aplicaciones y sistemas para gestionar automáticamente
                            su infraestructura en la plataforma Softlayer.
                        </p>
                        <p>
                            Potentes servidores de metal desnudo. Servidores virtuales de próxima generación. Cargas de
                            trabajo altamente intensivas. Como SoftLayer, construimos nuestra nube para realizar. Ahora
                            que somos IBM Cloud, estamos tomando la nube que construimos desde cero y la convertimos en
                            la mejor solución de nube para su empresa hoy en día.</p>
                    </div>
                    <div className="ant-banner"/>
                </div>
                <div className="about-erp home-sub-content">
                    <div className="home-sub-info background-dark-green">
                        <h2 style={{fontSize:"1.5rem",fontWeight: 250}} >
                            Cuando se trata de computación en la nube, no hay nada malo en tener una ventaja competitiva.
                        </h2>
                        <p style={{fontSize:"1.1rem"}}>
                           IBM Cloud garantiza su integración perfecta a los entornos de nube pública y privada.
                            <br/>
                            La infraestructura es segura, escalable y flexible, lo que brinda soluciones empresariales
                            personalizadas que hacen de IBM Cloud el lider del mercado de la nube hibrida.
                        </p>
                    </div>
                    <div className="home-sub-info background-white">
                        <h2 className="title">
                            Beneficios IBM Cloud
                        </h2>
                        <div className="about">
                            <p><Icon type="deployment-unit"
                                     style={{fontSize: "2rem", color: "#08c"}}/> <br/>Tecnologias abiertas</p>
                            <p><Icon type="solution"
                                     style={{fontSize: "2rem", color: "#08c"}}/><br/>DevOps para la Innovación <br/>Empresarial</p>
                            <p><Icon type="pull-request"
                                     style={{fontSize: "2rem", color: "#08c"}}/><br/>Integración Híbrida</p>
                            <p><Icon type="key"
                                     style={{fontSize: "2rem", color: "#08c"}}/><br/>Datos y Analíticas accesibles</p>
                            <p><Icon type="monitor"
                                     style={{fontSize: "2rem", color: "#08c"}}/><br/>Soluciones Cógnitivas</p>
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", textAlign: "center", fontSize: "2rem", fontWeight: 150, padding: "25px 20px 0 20px"}}>
                    IBM Cloud vs la competencia
                </div>
                <div className="ant-clients">
                    <div className="functionalities">
                        <div className="functionality">
                            <h2>Red</h2>
                            <b>IBM Cloud</b><br/>
                            <ul>
                                <li>Red privada global integrada para una fácil implementación y comunicación
                                    ininterrumpida entre servidores
                                </li>
                            </ul>
                            <b>Competencia</b><br/>
                            <ul>
                                <li>Red interna limitada o restringida a regiones seleccionadas</li>
                            </ul>
                        </div>
                        <div className="functionality">
                            <h2>Transferencia de datos</h2>
                            <b>IBM Cloud</b><br/>
                            <ul>
                                <li>Ancho de banda de red privada ilimitado en todos los servidores virtuales y
                                    virtuales
                                </li>
                            </ul>
                            <br/>
                            <b>Competencia</b><br/>
                            <ul>
                                <li>Se aplican tarifas de transferencia para datos movidos entre servidores</li>
                            </ul>
                        </div>
                        <div className="functionality">
                            <h2>Ancho de banda</h2>
                            <b>IBM Cloud</b><br/>
                            <ul>
                                <li>Ancho de banda de red privada ilimitado en todos los servidores virtuales y
                                    virtuales
                                </li>
                                <li>Ancho de banda público de salida de 250 GB por mes en todos los servidores virtuales
                                    mensuales
                                </li>
                                <li>500 GB por mes de ancho de banda público saliente en todos los servidores mensuales
                                    completos de metal
                                </li>
                            </ul>
                            <b>Competencia</b><br/>
                            <ul>
                                <li>Cargos por GB por todo el ancho de banda utilizado en el mes</li>
                            </ul>
                        </div>
                        <div className="functionality">
                            <h2>Gestión y soporte</h2>
                            <b>IBM Cloud</b><br/>
                            <ul>
                                <li>Opciones de gestión incluidas. Opciones de monitoreo incluidas.</li>
                                <li>Acceso directo a todos los recursos de soporte técnico sin cargo adicional</li>
                            </ul>
                            <b>Competencia</b><br/>
                            <ul>
                                <li>Disponibilidad limitada de opciones gratuitas de administración y monitoreo</li>
                                <li>Acceso escalonado (y con cargo) al soporte técnico</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
