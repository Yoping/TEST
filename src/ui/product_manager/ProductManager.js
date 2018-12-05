import React, { Component } from "react";
import "zent/css/index.css";
import "./ProductManger.css";
import "./service/Headquarters/HeadquartersService";
import HeadquartersService from "./service/Headquarters/HeadquartersService";
import Service from "./service/Service";
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
        <TabPane tab="服务" key="1" className="test">
          <Service isService={true} />
        </TabPane>
        <TabPane tab="卡项" key="2">
          卡项
        </TabPane>
        <TabPane tab="产品" key="3">
        <br/>
          <div>
            <Service isService={false} className="test"/>
          </div>
        </TabPane>
        <TabPane tab="库存" key="4">
          库存
        </TabPane>
        <TabPane tab="供应商" key="5">
          供应商
        </TabPane>
      </Tabs>
    );
  }
}

export default ProductManager;
