import React, {Component} from "react";
import ant from "./../../res/images/ant.jpg"
import {Button, Input} from "antd";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


class ContactUs extends Component {

    render() {
        return (
            <div className="ant-content">
                <div className="ant-content-text">
                    <div className="ant-text">
                        <h1 style={{fontSize: "2.2rem", fontWeight: 250, color: "#ff7832"}}>
                            Conctáctanos
                        </h1>
                        <form id="fs-frm" name="complaint-form" accept-charset="utf-8" method="POST" action="https://formspree.io/elazon01@gmail.com">
                            <fieldset id="fs-frm-inputs">
                            <Input type="text" name="name" placeholder="Nombre" style={{marginBottom: "5px"}}/>
                            <Input type="email" name="_replyto" placeholder="Correo" style={{marginBottom: "5px"}}/>
                            <Input type="telephone" name="telephone" id="telephone" placeholder="Telefono +51 999 999 999" style={{marginBottom: "5px"}}/>
                            <textarea className="ant-input" rows="6" name="complaint" id="complaint" placeholder="Ingrese su mensaje  ." required=""/>
                            </fieldset>
                            <Button type="primary" htmlType="submit" value="Send">Enviar</Button>
                        </form>
                    </div>
                    <div className="maps"/>
                    {/*<div>*/}
                    {/*    <GoogleMapReact*/}
                    {/*        bootstrapURLKeys={{ key: "AIzaSyAItl-QhVSKz0K5QyAgSqh-otBVaElJYR4" }}*/}
                    {/*        defaultCenter={this.props.center}*/}
                    {/*        defaultZoom={this.props.zoom}*/}
                    {/*    >*/}
                    {/*        <AnyReactComponent*/}
                    {/*            lat={59.955413}*/}
                    {/*            lng={30.337844}*/}
                    {/*            text="My Marker"*/}
                    {/*        />*/}
                    {/*    </GoogleMapReact>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}
export default ContactUs;
