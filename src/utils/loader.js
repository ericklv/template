import React from "react";
import {Icon, Spin} from "antd";

const antIcon = <Icon type="loading"
                      className={"spin-version-icon"}
                      spin/>;

export const spinLoader = () => {
    return (
        <div className="spin-loader">
            <Spin indicator={antIcon}
                  spinning={true}
                  className="spin-version">
            </Spin>
        </div>
    )
};