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
          <TabPane tab={this.props.isService?"总店服务":"总店产品"} key="1">
            <HeadquartersService isHeadquarters={true}/>
          </TabPane>
          <TabPane tab={this.props.isService?"门店服务":"门店产品"}  key="2" >
            <HeadquartersService isHeadquarters={false}/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Service;
