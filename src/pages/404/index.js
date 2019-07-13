import React, {Component} from "react";
import {Button, Layout} from "antd";

const {Content} = Layout;

export default class Index extends Component {

    render() {
        return (
            <Content>
                <div style={{display: "flex", textAlign: "center", width: "100%"}} className="bground">
                    <Button type="primary"
                            onClick={() => this.props.history.push("/users")}
                            className="buttonBack">
                        Back to Users
                    </Button>
                </div>
            </Content>

        );
    }
}