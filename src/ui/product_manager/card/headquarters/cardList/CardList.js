import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import "./CardList.css"
import "../../../../common/widget/button/button.css"

const columns = [
  {
    title: "卡项",
    dataIndex: "serviceName",
    key: "serviceName",
    render: serviceType => (
      <div className="service-name-div">
        <img className="service-img" src="https://img.yzcdn.cn/upload_files/2018/12/03/Fq9u8mRnPIuAlq1LsfmiUFb6R9jD.jpg" />
        <div  className="service-info" >
            <div className="service-name">洗头</div>
            <div className="service-price">￥250</div>
        </div>
      </div>
    )
  },
  {
    title: "有效期",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "网店售卡",
    dataIndex: "sign",
    key: "sign"
  },
  {
    title: "总销量",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "状态",
    dataIndex: "sort",
    key: "sort"
  },
  {
    title: "在售门店",
    dataIndex: "shopSale",
    key: "shopSale"
  },
  {
    title: "总销量",
    dataIndex: "totalSales",
    key: "totalSales"
  },
  {
    title: "操作",
    key: "operate",
    dataIndex: "operate",
    render: operate => (
      <div className="btnOperate btnPink">编辑</div>
    )
  }
];

const data = [
  {
    key: "1",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "2",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "3",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "4",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "5",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "6",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "7",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "8",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "9",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "10",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "11",
    image:"",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    sign:"很贵",
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
];
// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

class ServiceList extends Component {
  render() {
    return <Table className="table" rowSelection={rowSelection} columns={columns} dataSource={data} pagination={true}/>;
  }
}

export default ServiceList;
