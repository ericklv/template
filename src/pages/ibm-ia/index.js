import React, {Component} from "react";

export default class Ibm extends Component {

    render() {
        return (
            <div className="ibm-content">
                <div style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: 150,
                    padding: "18px 20px",
                    background: "black",
                    color: "white"
                }}>
                    Optimice su camino hacia la IA desde la experimentación hasta la producción
                </div>
                <div className="ibm-content-text">
                    <div className="ant-ia-banner"/>
                </div>
                <div className="background-dark-green"
                     style={{
                         textAlign: "center",
                         padding: "20px"
                     }}
                >
                    <h2 style={{fontSize: "2rem", fontWeight: 250}}>
                        Plataformas rápidas y flexibles para la IA
                    </h2>
                    <p style={{fontSize: "1.1rem"}}>
                        Las aplicaciones creadas con el aprendizaje automático y el aprendizaje profundo presionan las
                        demandas de los sistemas hasta nuevos niveles. Para procesar grandes volúmenes de datos a la
                        velocidad que la IA requiere, se necestia la potencia de procesamiento masiva, alto rendimiento
                        y aceleración GPU.
                    </p>
                </div>
                <div className="ant-clients background-image">
                    <div className="functionalities">
                        <div className="functionality">
                            <h2>Un enfoque integrado para el hardware, el software y los datos</h2>
                            <p>
                                La infraestructura de TI de IBM esta diseñada pensando en el panorama global de la IA y
                                utiliza la combinación adecuada de sistemas, software e infraestructuras de codigo
                                abierto para acelerar la TI para tener exito con la IA y el aprendizaje profundo.
                            </p>
                        </div>
                        <div className="functionality">
                            <h2>Velocidad y flexibilidad</h2>
                            <p>
                                IBM cuenta con la computación, el rendimiento y la aceleración de GPU necesarios para la
                                IA. Seleccione entre configuraciones de hardware/software flexibles para ejecutar IA en
                                la nube o localmente.
                            </p>
                        </div>
                        <div className="functionality">
                            <h2>El software y los algoritmos adecuados</h2>
                            <p>
                                IBM cuenta con el software que le ayudará a entrenar, implementar y optimizar en miles
                                de núcleos, desde la optimización de núcleos y la gestión de cargas de trabajo hasta las
                                infraestructuras de aprendizaje profundo de código abierto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
