import React, { Component } from "react";
import { Tabs } from "antd";
import Header from "antd/lib/calendar/Header";
import HeadquartersService from "./Headquarters/HeadquartersService";
import "./Service.css";

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
class Service extends Component {
  render() {
    return (
      <div>
        <Tabs
          tabPosition="top"
          onChange={callback}
          type="card"
          className="service-tab"
        >
          <TabPane tab="总店服务" key="1">
            <HeadquartersService />
          </TabPane>
          <TabPane tab="门店服务" key="2">
            门店服务
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Service;
