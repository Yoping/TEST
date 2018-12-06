import React, { Component } from "react";
import { Tabs } from "antd";
import HeadquartersCard from "./headquarters/HeadquartersCard";
import "./Card.css"
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
class Card extends Component {
  render() {
    return (
      <div>
        <Tabs
          tabPosition="top"
          onChange={callback}
          type="card"
          className="card-tab" 
        >
          <TabPane tab="总部卡项" key="1">
            <HeadquartersCard isHeadquarters={true} />
          </TabPane>
          <TabPane tab="门店卡项" key="2">
            <HeadquartersCard isHeadquarters={false} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default Card;
