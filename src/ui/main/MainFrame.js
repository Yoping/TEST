import React, { Component } from "react";
import "./MainFrame.css";
import "../common/tab/TabController";
import TabController from "../common/tab/TabController";
import ProductManger from "../product_manager/ProductManager";
class MainFrame extends Component {
  render() {
    return (
      <div className="container">
        <TabController>
          <div className="tab-item" name="商品管理">
          <ProductManger></ProductManger>
          </div>
          <div className="tab-item" name="订单管理">
            订单管理
            <img src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1676479072.jpg" />
          </div>
          <div className="tab-item" name="预约管理">预约管理</div>
          <div className="tab-item" name="员工管理">员工管理</div>
          <div className="tab-item" name="货品管理">货品管理</div>
          <div className="tab-item" name="设置">设置</div>
        </TabController>
      </div>
    );
  }
}

export default MainFrame;
