import React, { Component } from "react";
import { Tabs } from "zent";
import "zent/css/index.css";
import "./ProductManger.css";
import "./service/Headquarters/HeadquartersService";
import HeadquartersService from "./service/Headquarters/HeadquartersService";
const TabPanel = Tabs.TabPanel;

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
        type="slider"
        activeId={this.state.activeId}
        onChange={this.onTabChange}
      >
        <TabPanel tab="服务" id="1">
          <div>
            <HeadquartersService />
          </div>
        </TabPanel>
        <TabPanel tab="卡项" id="2">
          <div>卡项</div>
        </TabPanel>
        <TabPanel tab="产品" id="3">
          <div>产品</div>
        </TabPanel>
        <TabPanel tab="库存" id="4">
          <div>库存</div>
        </TabPanel>
        <TabPanel tab="供应商" id="5">
          <div>供应商</div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default ProductManager;
