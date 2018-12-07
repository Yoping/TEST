import React, { Component } from "react";
import "zent/css/index.css";
import "./ProductManger.css";
import "./service/Headquarters/HeadquartersService";
import HeadquartersService from "./service/Headquarters/HeadquartersService";
import Service from "./service/Service";
import Card from "./card/Card";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class ProductManager extends React.Component {
  state = {
    activeId: "1"
  };

  onTabChange = id => {
    this.setState({
      activeId: id
    });
  };

  render() {
    return (
      <Tabs
        tabPosition="top"
        defaultActiveKey="1"
        onChange={callback}
        className="product_manager_top_menu"
      >
        <TabPane tab="服务" key="1">
          <Service isService={true} />
        </TabPane>
        <TabPane tab="卡项" key="2">
          <Card />
        </TabPane>
        <TabPane tab="产品" key="3">
          <Service isService={false} />
        </TabPane>
      </Tabs>
    );
  }
}

export default ProductManager;
