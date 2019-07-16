import React, {Component} from "react";
import ant from "./../../res/images/ant.jpg"

export default class Ant extends Component {

    render() {
        return (
            <div>
                <div className="ant-content">
                    <div className="ant-text">
                        <h1 style={{fontSize: "2.2rem", fontWeight: 250}}>
                            ANT ERP
                        </h1>
                        <p>
                            ERP ANT Es el sistema ERP (Enterprise Resource Planning) de la empresa LOGINET SAC y sus
                            socios estratégicos brindamos como solución de negocio a la pequeña y mediana empresa
                            Industriales y de Servicios.
                        </p>
                        <p>
                            A lo largo de estos años encontramos, que en el mercado hay muchas soluciones que manejan
                            los Módulos Administrativos, pero entran tímidamente al aspecto de “Operaciones” por lo que
                            no pueden concretar su “ Cadena de Valor” Logística, Producción, Costos), por lo que fuimos
                            enfocando el producto cada vez a esas funcionalidades logrando una gran utilidad marginal
                            para las empresas industriales con un producto que maneja entre otras cosas Plan de
                            Producción, Plan de Compras, Manejo de Ordenes de Producción y Servicio, Planeamiento de
                            Ordenes de Producción, Costeo de Productos Terminados y Semi Terminados y Costeo de
                            Productos en Proceso, lo que les permite a estas empresas finalmente manejar su
                            Rentabilidad</p>
                    </div>
                    <div className="ant-banner">
                        <img src={ant}
                             alt=""
                             height="100%"
                             style={{maxWidth: "100%", height: "100%", maxHeight: "400px"}}/>
                    </div>
                </div>
                <div style={{width: "100%", textAlign: "center", fontSize: "2rem", fontWeight: 150, padding: "0 20px"}}>
                    Funcionalidades
                </div>
                <div className="ant-clients">
                    <div className="functionalities">
                        <div className="functionality">
                            <h2>Inventarios</h2>
                            <b>Productos</b>
                            <br/>
                            <b>Equivalencias</b>
                            <br/>
                            <b>Set</b><br/>
                            <b>Movimientos</b><br/>
                            <ul>
                                <li>Nota de Ingreso</li>
                                <li>Nota de Salida</li>
                                <li>Guía de remisión</li>
                            </ul>
                            <b>Reportes</b><br/>

                            <ul>
                                <li>Análisis de Costos por Artículo</li>
                                <li>Stock Actual</li>
                                <li>Kardex</li>
                                <li>Ventas y Existencias</li>
                                <li>Valorización</li>
                                <li>Resumen Guías de Remisión</li>
                                <li>Reporteador Inv.</li>
                            </ul>


                            <b>Reposición</b><br/>
                            <ul>
                                <li>Productos debajo del Stock mínimo</li>
                                <li>Productos encima Stock máximo</li>
                                <li>Productos / Proveedores</li>
                            </ul>
                        </div>
                        <div className="functionality">
                            <h2>Comercial</h2>
                            <b>Clientes</b>
                            <br/>
                            <b>Atención</b>
                            <ul>
                                <li>Registro de Pedidos</li>
                                <li>Resume Pedidos Pend.</li>
                                <li>Salida Ventas</li>
                                <li>Despacho / Facturación</li>
                                <li>Guías, Boletas, Facturas</li>
                                <li>Facturas Importación</li>
                                <li>Impresión de Documentos</li>
                                <li>Resumen de Documentos</li>
                                <li>Comisiones</li>
                                <li>Renumeración de Documentos</li>
                                <li>Anular Documentos</li>
                            </ul>
                            <br/>
                            <b>Notas (Cargo/Abono)</b><br/>
                            <b>Cobranza</b><br/>
                            <ul>
                                <li>Informe de Cobranza</li>
                                <li>Resumen de Cobranza</li>
                                <li>Anticipos</li>
                            </ul>
                            <b>Canje de Documentos</b><br/>
                            <b>Cuenta Corriente</b><br/>
                            <ul>
                                <li>Análisis de Costos por Artículo</li>
                                <li>Stock Actual</li>
                                <li>Kardex</li>
                                <li>Ventas y Existencias</li>
                                <li>Valorización</li>
                                <li>Resumen Guías de Remisión</li>
                                <li>Reporteador Inv.</li>
                            </ul>
                            <b>Registro de Ventas</b><br/>
                        </div>
                        <div className="functionality">
                            <h2>Proveedores</h2>
                            <b>Proveedores</b><br/>
                            <b>Orden de compra</b><br/>
                            <ul>
                                <li>Gestión de compra</li>
                            </ul>
                            <b>Registro de Documentos</b><br/>
                            <b>Canje de Documentos por Letras</b><br/>
                            <b>Registro de Compras</b><br/>
                            <b>Cuenta Corriente</b><br/>
                            <ul>
                                <li>Cuenta Corriente Proveedores</li>
                                <li>Resumen Cuentas por Pagar</li>
                                <li>Histórico de Cuentas por Pagar</li>
                                <li>Reporteador Proveedores</li>
                            </ul>
                            <b>Requisiciones de Compra</b><br/>
                            <ul>
                                <li>Manuales</li>
                                <li>Automáticas</li>
                            </ul>
                            <b>Reposición</b><br/>
                            <ul>
                                <li>Productos debajo del Stock mínimo</li>
                                <li>Productos encima Stock máximo</li>
                                <li>Productos / Proveedores</li>
                            </ul>
                        </div>
                        <div className="functionality">
                            <h2>Tesorería</h2>
                            <b>Libro Bancos</b><br/>
                            <b>Pagos a Proveedores</b><br/>
                            <b>Conciliación Bancaria</b><br/>
                            <b>Letras por Cobrar</b><br/>
                            <ul>
                                <li>Movimiento de Letras</li>
                                <li>Renovación de Letras</li>
                                <li>Resumen Letras por Cobrar</li>
                            </ul>
                            <b>Caja Chica</b><br/>
                            <ul>
                                <li>Apertura Caja Chica</li>
                                <li>Movimiento Caja Chica</li>
                                <li>Reposición Caja Chica</li>
                            </ul>
                            <b>Resumen de Pagos</b><br/>
                        </div>
                        <div className="functionality">
                            <h2>Contabilidad</h2>
                            <b>Configuración de Tablas</b><br/>
                            <b>Interface Contable</b><br/>
                            <b>Comprobantes Contables</b><br/>
                            <ul>
                                <li>Generación Pre-Diario</li>
                                <li>Comprobantes (registro, modificación y transferencia)</li>
                            </ul>
                            <b>Procesos</b><br/>
                            <ul>
                                <li>Cierre de Mes</li>
                                <li>Cierre de año</li>
                            </ul>
                            <b>Reportes</b><br/>
                            <ul>
                                <li>Comprobante Diario</li>
                                <li>Balance de Comprobación</li>
                                <li>Saldos contables</li>
                                <li>Mayor Auxiliar Analítico</li>
                                <li>Mayor Auxiliar Estructural</li>
                                <li>Mayor Auxiliar Analítico Estructural</li>
                                <li>Balance General</li>
                                <li>Estado Ganancias y Perdidas</li>
                                <li>Reporte de Asientos Descuadrados</li>
                            </ul>
                            <b>Reportes SUNAT</b><br/>
                            <ul>
                                <li>Registro de Compras</li>
                                <li>Registro de Ventas e Ingresos</li>
                                <li>Balance de Comprobación</li>
                                <li>Balance General</li>
                                <li>Libro Diario</li>
                                <li>Estado de Ganancias y Perdidas</li>
                                <li>Mayor Auxiliar Analítico Estructural</li>
                                <li>Honorarios Profesionales</li>
                                <li>Kardex</li>
                                <li>Valorización</li>
                                <li>Libro de Caja y Bancos</li>
                                <li>Libro de Inventarios y Balances</li>
                                <li>Inventarios y Balances Cta. 10</li>
                            </ul>
                            <b>Presupuestos</b><br/>
                        </div>
                        <div className="functionality">
                            <h2>Planillas</h2>
                            <b>Conceptos</b><br/>
                            <ul>
                                <li>Mantenimiento</li>
                                <li>Conceptos por trabajador</li>
                            </ul>
                            <b>Tiempos</b><br/>
                            <ul>
                                <li>Control electrónico de tiempos</li>
                                <li>Tareo</li>
                                <li>Proceso tiempos</li>
                            </ul>
                            <b>Calculo</b><br/>
                            <ul>
                                <li>Listado de consistencia</li>
                                <li>Calculo de 5ta categoría</li>
                                <li>Calculo planilla</li>
                                <li>AFP net</li>
                                <li>Liquidaciones</li>
                            </ul>
                            <b>Procesos</b><br/>
                            <ul>
                                <li>Compensación tiempo servicio</li>
                                <li>Prog. Declara telemática</li>
                                <li>Prestamos</li>
                            </ul>
                            <b>Reportes</b><br/>
                            <ul>
                                <li>Planilla Quincenal</li>
                                <li>Planilla mensual</li>
                                <li>Boleta</li>
                                <li>Reporteador Planillas</li>
                            </ul>
                        </div>
                        <div className="functionality">
                            <h2>SIG</h2>
                            <b>Presupuestos</b><br/>
                            <b>Flujo de Caja</b><br/>
                            <b>B.S.C</b><br/>
                            <b>Rentabilidad</b><br/>
                            <b>Reportes Gerenciales</b><br/>
                        </div>
                        <div className="functionality">
                            <h2>Configuración</h2>
                            <b>Tablas</b><br/>
                            <b>Usuarios del Sistema</b><br/>
                            <b>Mantenimiento de Password</b><br/>
                            <b>Tipo de Cambio</b><br/>
                            <b>Selección de Impresora</b><br/>
                            <b>Asignación de Opciones</b><br/>
                        </div>
                        <div className="functionality">
                            <h2>Producción</h2>
                            <b>Proveedores</b><br/>
                            <b>Plan de Producción</b><br/>
                            <b>Orden de Producción/Servicios</b><br/>
                            <b>Formulación</b><br/>
                            <ul>
                                <li>Mantenimiento de Formulas</li>
                                <li>Productos Sustitutos</li>
                                <li>Definición de Procesos</li>
                            </ul>
                            <b>Cierre</b><br/>
                            <ul>
                                <li>Costos Directos</li>
                                <li>Ordenes de Producción Valorizadas (PT)</li>
                                <li>Costo productos en Proceso</li>
                                <li>Análisis de Costos Directos</li>
                                <li>Plazo entrega de Pedidos</li>
                                <li>Reporteador</li>
                            </ul>
                            <b>Planeamiento de O/P</b><br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
