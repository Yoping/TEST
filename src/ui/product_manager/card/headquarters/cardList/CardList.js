import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import "./CardList.css";
import "../../../../common/widget/button/button.css";

const columns = [
  {
    title: "卡项",
    dataIndex: "cardName",
    key: "cardName",
    render: (text, record) => (
      <div className="card-name-div">
        <img
          className="card-type-img"
          // src={require("../../../../../img/logo/card_recharge.png")}
          src={(() => {
            switch (record.cardType) {
              case 1:
                return require("../../../../../img/logo/card_sub.png");
              case 2:
                return require("../../../../../img/logo/card_discount.png");
              case 3:
                return require("../../../../../img/logo/card_recharge.png");
            }
          })()}
        />
        <div className="card-info">
          <div className="card-name">{record.cardName}</div>
          <div className="card-price">￥{record.price}</div>
        </div>
      </div>
    )
  },
  {
    title: "有效期",
    dataIndex: "validityTime",
    key: "validityTime"
  },
  {
    title: "网店售卡",
    dataIndex: "canSaleOnNet",
    key: "canSaleOnNet",
    render: canSaleOnNet => <div>{canSaleOnNet ? "支持" : "不支持"}</div>
  },
  {
    title: "总销量",
    dataIndex: "totalSales",
    key: "totalSales"
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    render: state => (
      <div>
        {state==1?"已上架":"未上架"}
      </div>
    )
  },
  {
    title: "操作",
    key: "operate",
    dataIndex: "operate",
    render: operate => <div className="btnOperate btnPink">编辑</div>
  }
];

const data = [
  {
    key: "1",
    cardName: "贵宾卡",
    cardType: 1,
    price: 999,
    giveNum: 10,
    validityTime: "永久有效",
    canSaleOnNet: true,
    time: "60分钟",
    totalSales: 369,
    state: 1
  },
  {
    key: "2",
    cardName: "圣诞卡",
    cardType: 2,
    price: 129,
    giveNum: 10,
    validityTime: "永久有效",
    canSaleOnNet: false,
    time: "60分钟",
    totalSales: 66,
    state: 2
  },
  {
    key: "3",
    cardName: "牛逼卡",
    cardType: 1,
    price: 229,
    giveNum: 10,
    validityTime: "永久有效",
    canSaleOnNet: true,
    time: "60分钟",
    totalSales: 66,
    state: 2
  },
  {
    key: "4",
    cardName: "圣诞卡",
    cardType: 3,
    price: 269,
    giveNum: 10,
    validityTime: "30天",
    canSaleOnNet: false,
    time: "60分钟",
    totalSales: 256,
    state: 1
  },
  {
    key: "5",
    cardName: "元旦卡",
    cardType: 1,
    price: 669,
    giveNum: 10,
    validityTime: "永久有效",
    canSaleOnNet: false,
    time: "60分钟",
    totalSales: 66,
    state: 2
  },
  {
    key: "6",
    cardName: "新年快乐卡",
    cardType: 2,
    price: 229,
    giveNum: 10,
    validityTime: "永久有效",
    canSaleOnNet: true,
    time: "60分钟",
    totalSales: 99,
    state: 1
  },
  {
    key: "7",
    cardName: "圣诞卡",
    cardType: 1,
    price: 229,
    giveNum: 10,
    validityTime: "60天",
    canSaleOnNet: true,
    time: "60分钟",
    totalSales: 66,
    state: 1
  },
  {
    key: "8",
    cardName: "圣诞卡",
    cardType: 1,
    price: 229,
    giveNum: 10,
    validityTime: "永久有效",
    canSaleOnNet: true,
    time: "60分钟",
    totalSales: 66,
    state: 1
  }
];
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name
  })
};

class ServiceList extends Component {
  render() {
    return (
      <Table
        className="table"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={true}
      />
    );
  }
}

export default ServiceList;
