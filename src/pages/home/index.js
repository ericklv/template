import React, {Component} from "react";
import {Button, Icon} from "antd";
import ant from "./../../res/images/ant.png";
import ant2 from "./../../res/images/ant2.png";
import db2 from "./../../res/images/db2.png";
import ibmcloud from "./../../res/images/ibm-cloud.png";
import invoice from "./../../res/images/invoice.png";
import financial from "./../../res/images/financial.png";

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.myRef = null
    }

    render() {
        return (
            <div className="home-content">
                <div className="home-banner banner-background">
                    <div className="home-banner-ant">
                        <div className="home-banner-text">
                            <h5>IBM Partner World</h5>
                            <h2>ANT ERP</h2>
                            <p className="text-desktop">Por fin
                                un <a onClick={() => window.scrollTo(0, this.myRef.offsetTop)}>
                                    ERP Industrial</a> de Manufactura y Servicio al alcance de las PYMES. Ant ERP
                                funciona en la nube de IBM.
                                <br/>
                                EL ANT trabaja totalmente en la Nube y tiene componentes de Inteligencia Artificial.
                            </p>
                            <p className="text-mobile">Por fin un <href>ERP Industrial</href> de Manufactura y Servicio
                                al
                                alcance de las PYMES totalmente en la Nube y tiene componentes de Inteligencia
                                Artificial.
                            </p>
                            <Button style={{width: "100px"}}
                                    onClick={() => this.props.history.push("/ant")}>Leer más</Button>
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
                            <h2 style={{width: "70%"}}>Esto no es solo una nube es <br/><b>IBM Cloud.</b></h2>
                            <p style={{width: "65%"}}>IBM Cloud es la nube para un negocio más inteligente En ella han
                                confiado miles de
                                empresas de más de 20 industrias por su proceso de ca seguro a
                                la nube. Ant ERP funciona en la nube, pero no en cualquier nube, usamos la nube de
                                IBM.</p>
                            <Button style={{width: "100px"}}
                                    onClick={() => this.props.history.push("/ibm")}>Leer más</Button>
                        </div>
                    </div>
                    <div className="home-sub-info ia-cloud-background">
                        <div>
                            <h2 style={{width: "80%"}}>Ingrese al futuro de los negocios <br/><b>Infraestructura de la
                                IA de
                                IBM</b></h2>
                            <p style={{width: "60%"}}>La tecnología de IA se ha movido de la ciencia ficción hacia la
                                realidad en los negocios.
                                Para hacer frente a los desafíos actuales y preparars , son necesarias
                                soluciones de IA que se Ant ERP funciona en la nube, pero no en cualquier nube, usamos
                                la nube de IBM. integren con su infraestructura y su estrategia de datos .</p>
                            <Button style={{width: "100px"}}
                                    onClick={() => this.props.history.push("/ibm")}>Leer más</Button>
                        </div>
                    </div>
                </div>
                <div className="about-erp home-sub-content"
                     ref={(ref) => this.myRef = ref}>
                    <div className="home-sub-info">
                        <h2 className="title" style={{fontSize: "1.3rem"}}>
                            ¿ Qué es un ERP Industrial?
                        </h2>
                        <p style={{fontSize: "1.1rem"}}>
                            Un ERP se refiere a Enterprise Resource Planning, que significa “sistema de planificación de
                            recursos empresariales”.
                            <br/>
                            Ant ERP se hace cargo de todas las operaciones internas de una empresa, desde producción a
                            distribución o incluso recursos humanos.
                        </p>
                    </div>
                    <div className="home-sub-info">
                        <h2 className="title">
                            Beneficios Ant ERP
                        </h2>
                        <div className="about">
                            <p><Icon type="setting"
                                     style={{fontSize: "2rem", color: "#08c"}}/> <br/>Integración de Procesos</p>
                            <p><Icon type="dollar"
                                     style={{fontSize: "2rem", color: "#08c"}}/><br/>Costeo permanente de <br/>las
                                Operaciones</p>
                            <p><Icon type="reconciliation"
                                     style={{fontSize: "2rem", color: "#08c"}}/><br/>Gestión descentralizada</p>
                            <p><Icon type="branches"
                                     style={{fontSize: "2rem", color: "#08c"}}/><br/>Trazabilidad</p>
                            <p><Icon type="safety-certificate"
                                     style={{fontSize: "2rem", color: "#08c"}}/><br/>Seguridad</p>
                            <p><Icon type="apartment"
                                     style={{fontSize: "2rem", color: "#08c"}}/><br/>Infraestructura para el <br/> planeamiento</p>

                        </div>
                    </div>
                </div>
                <div className="home-sub-services">
                    <h2 style={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "2rem",
                        fontWeight: 150,
                        padding: "25px 20px 0 20px"
                    }}>
                        Servicios
                    </h2>
                    <div>
                        <img src={db2}
                             style={{maxWidth: "120px"}}/>
                        <h2>
                            Soporte BM DB2
                        </h2>
                        <p>
                            Contamos con técnicos en este software que dan soporte a numerosas instalaciones diariamente
                        </p>
                    </div>
                    <div>
                        <img src={ant2}
                             style={{maxWidth: "120px", paddingBottom: "7px"}}/>
                        <h2>
                            Soporte y Capacitación ANT
                        </h2>
                        <p>
                            Tenemos consultores y Personal técnico especializado que realizan estas tareas diariamente
                            en diversos tipos de industrias.
                        </p>
                    </div>
                    <div>
                        <img src={invoice}
                             style={{maxWidth: "120px", paddingBottom: "7px"}}/>
                        <h2>
                            Facturación Electrónica
                        </h2>
                        <p>
                            Contamos con emisión de factura electrónica para mypes.
                        </p>
                    </div>
                    <div>
                        <img src={ibmcloud}
                             style={{maxWidth: "120px"}}/>
                        <h2>
                            IBM Cloud
                        </h2>
                        <p>
                            Nuestros Técnicos se encargan de gestionar las labores de servicio dentro del ambiente
                            IBM Cloud.
                        </p>
                    </div>
                    <div>
                        <img src={financial}
                             style={{maxWidth: "120px", paddingBottom: "7px"}}/>
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
