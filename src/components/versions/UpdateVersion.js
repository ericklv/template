import React, {Component} from "react";
import {Button, Card} from "antd";

export default class UpdateVersion extends Component {

    render() {
        return (
            <div className="login-content">
                <Card className="login-card">
                    <h2>Please refresh to get the latest version of the application.</h2>
                    <Button type="primary"
                            onClick={() => document.location.reload(true)}
                            className="login-form-button">
                        Refresh
                    </Button>
                </Card>
            </div>
        );
    }
}