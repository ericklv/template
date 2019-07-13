import React, {Component} from "react";
import {Icon, Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import logo from "../res/images/logo.png";

export default class BaseLayout extends Component {

    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    logOut = () => {
    };

    childWithProperties = (props) => React.Children.map(this.props.children, child => React.cloneElement(child, {...props}));

    render() {

        let route = window.location.href;
        let currentKey = route.split("/").pop();

        return (
            <Layout className="base-layout">
                <Layout className="base-layout">
                    <Layout.Sider trigger={null}
                                  collapsedWidth={0}
                                  collapsible
                                  theme="light"
                                  collapsed={this.state.collapsed}>
                        <div className="logoVersion"><b>MENU</b></div>
                        <Menu theme="light"
                              mode="inline"
                              defaultSelectedKeys={[currentKey]}>
                            <Menu.Item key="home">
                                <Link to="/about-us">
                                    <Icon type="home"/>
                                    <span>Compañia</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="users">
                                <Link to="/services">
                                    <Icon type="user"/>
                                    <span>Servicios</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="companies">
                                <Link to="/clients">
                                    <Icon type="bank"/>
                                    <span>Clientes</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="intranet">
                                <Link to="/intranet">
                                    <Icon type="bank"/>
                                    <span>Intranet</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Layout.Sider>
                    <Layout>
                        <Layout.Header className="base-layout-header">
                            <Icon className="trigger"
                                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                  onClick={this.toggle}/>
                            <span className="projectTitle">Loginet Peru</span>
                        </Layout.Header>
                        <Layout.Content style={{
                            background: '#fff',
                            minHeight: '75vh'
                        }}>
                            {this.childWithProperties(this.props)}
                        </Layout.Content>
                        <Layout.Footer>
                            <div className="base-layout-footer">
                                <div className="footer-options">
                                    <div className="footer-text">
                                        <ul><a href="#"
                                               className="footer-text-title">INICIO</a></ul>
                                        <ul><label className="footer-text-title">
                                            PRODUCTOS
                                        </label>
                                            <li>ERP Ant</li>
                                            <li>IBM Cloud</li>
                                        </ul>
                                        <ul><label className="footer-text-title">
                                            SERVICIOS
                                        </label>
                                            <li>Soporte IBM DB2.</li>
                                            <li>Soporte y Capacitación ANT.</li>
                                            <li>Consultoría ANT en Procesos Industriales.</li>
                                            <li>Soporte Softlayer.</li>
                                            <li>Financiamiento Loginet.</li>
                                        </ul>
                                    </div>
                                    <div className="footer-text">
                                        <ul><a href="#"
                                               className="footer-text-title">COMPAÑIA</a></ul>
                                        <ul><a href="#"
                                               className="footer-text-title">CLIENTES</a></ul>
                                        <ul><a href="#"
                                               className="footer-text-title">CONTACTENOS</a></ul>
                                    </div>
                                    <div className="footer-text">
                                        <ul><label className="footer-text-title">
                                                PARTNERS & PROGRAMAS
                                        </label>
                                            <li>IBM</li>
                                            <li>SoftLayer</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="footer-logo-image">
                                    <img src={logo}
                                         alt="Logo"/>
                                    <div style={{width: "auto"}}>Telefono: 01 264 0148 / 01 264 0560</div>
                                    <div>Correo: info@loginetperu.com</div>
                                    <div>Direccion: Jr. Augusto Bolognesi 175 San Isidro</div>
                                </div>
                            </div>
                        </Layout.Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
};
