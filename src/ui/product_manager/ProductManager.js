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
        <TabPanel tab="选项一" id="1">
          <div>
            <HeadquartersService />
          </div>
        </TabPanel>
        <TabPanel tab="选项二" id="2">
          <div>选项二的内容</div>
        </TabPanel>
        <TabPanel tab="选项三" id="3">
          <div>选项三的内容</div>
        </TabPanel>
      </Tabs>
    );
  }
}

export default ProductManager;
