import React, {Component} from 'react';
import {Avatar, Button, Card, Form, Input} from 'antd';
import {prefixIcon} from "../../utils";

const login = Form.create()(
    class Login extends Component {

        state = {
            email: "",
            password: "",
            loginStatus: false,
        };

        login = (event) => {
            event.preventDefault();

        };

        render() {
            const {errorMessage, loginStatus} = this.state;

            return (
                <div className="login-content">
                    <Card className="login-card">
                        <Form onSubmit={this.login}
                              className="login-form">
                            <h1 className="title">Blanck project</h1>
                            <div style={{textAlign: "center"}}>
                                <Form.Item style={{marginBottom: "20px"}}>
                                    <Avatar size={100}
                                            style={{backgroundColor: '#1890ff'}}
                                            icon="team"/>
                                </Form.Item>
                            </div>
                            <h3>{errorMessage}</h3>
                            <Form.Item validateStatus={errorMessage ? "error" : ""}
                                       required>
                                <Input prefix={prefixIcon("user")}
                                       type="text"
                                       name="email"
                                       value={this.state.email}
                                       onChange={(event) => this.setState({
                                           email: event.target.value,
                                           errorMessage: null
                                       })}
                                       autoComplete="off"
                                       placeholder="Enter your email"/>
                            </Form.Item>
                            <Form.Item validateStatus={errorMessage ? "error" : ""}
                                       required>
                                <Input.Password prefix={prefixIcon("lock")}
                                                id="password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={(event) => this.setState({
                                                    password: event.target.value,
                                                    errorMessage: null
                                                })}
                                                autoComplete="off"
                                                placeholder="Enter your Password"/>
                            </Form.Item>
                            <Button type="primary"
                                    block={true}
                                    htmlType="submit"
                                    loading={loginStatus}
                                    disabled={errorMessage}>LOGIN</Button>
                        </Form>
                    </Card>
                </div>
            )
        }
    });
export default login;
