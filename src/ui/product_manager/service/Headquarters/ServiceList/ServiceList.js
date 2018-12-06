import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";
import "./ServiceList.css"
import "../../../../common/widget/button/button.css"

const columns = [
  {
    title: "服务",
    dataIndex: "serviceName",
    key: "serviceName",
    render: (text,record) => (
      <div className="service-name-div">
      <img
          className="service-img"
          src={record.image}
        />
        <div  className="service-info" >
            <div className="service-name">{record.serviceName}</div>
            <div className="service-price">￥{record.price}</div>
        </div>
      </div>
    )
  },
  {
    title: "分类",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "标签",
    dataIndex: "tags",
    key: "tags",
    render:tags=>(
      <span>
        {tags.map(tag=><Tag color="blue" key={tag}>{tag}</Tag>)}
      </span>
    )
  },
  {
    title: "服务时长",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "网店排序",
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
      <div className="btnOperate">编辑</div>
    )
  }
];

const data = [
  {
    key: "1",
    image:"http://img0.imgtn.bdimg.com/it/u=2414876651,682089895&fm=26&gp=0.jpg",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    tags:["很贵","舒服"],
    time:"60分钟",
    sort:0,
    shopSale:6,
    totalSales:99
  },
  {
    key: "2",
    image:"http://img2.imgtn.bdimg.com/it/u=3459015633,3664281837&fm=26&gp=0.jpg",
    serviceName:"按摩",
    price:"999",
    type: "特殊服务",
    tags:["很贵","牛逼"],
    time:"99分钟",
    sort:0,
    shopSale:9,
    totalSales:999
  },
  {
    key: "3",
    image:"http://img5.imgtn.bdimg.com/it/u=2836382148,1032166199&fm=11&gp=0.jpg",
    serviceName:"洗头",
    price:"299",
    type: "一般服务",
    tags:["一般"],
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:66
  },
  {
    key: "4",
    image:"http://img2.imgtn.bdimg.com/it/u=398777641,1265770759&fm=11&gp=0.jpg",
    serviceName:"洗脚",
    price:"250",
    type: "高级服务",
    tags:["很贵","效果一般"],
    time:"60分钟",
    sort:0,
    shopSale:3,
    totalSales:99
  },
  {
    key: "5",
    image:"http://img0.imgtn.bdimg.com/it/u=2414876651,682089895&fm=26&gp=0.jpg",
    serviceName:"洗脚",
    price:"699",
    type: "特殊服务",
    tags:["很贵","蛋疼"],
    time:"80分钟",
    sort:0,
    shopSale:15,
    totalSales:88
  },
  {
    key: "6",
    image:"http://img4.imgtn.bdimg.com/it/u=201340589,298704515&fm=11&gp=0.jpg",
    serviceName:"洗脚",
    price:"99",
    type: "高级服务",
    tags:["一般"],
    time:"60分钟",
    sort:0,
    shopSale:7,
    totalSales:321
  },
  {
    key: "7",
    image:"http://img3.imgtn.bdimg.com/it/u=543135668,2921218387&fm=11&gp=0.jpg",
    serviceName:"洗脚",
    price:"666",
    type: "高级服务",
    tags:["很贵","效果一般"],
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "8",
    image:"http://img2.imgtn.bdimg.com/it/u=1191065506,1480274716&fm=26&gp=0.jpg",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    tags:["一般"],
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "9",
    image:"http://img2.imgtn.bdimg.com/it/u=1191065506,1480274716&fm=26&gp=0.jpg",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    tags:["一般"],
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "10",
    image:"http://img2.imgtn.bdimg.com/it/u=1191065506,1480274716&fm=26&gp=0.jpg",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    tags:["一般"],
    time:"60分钟",
    sort:0,
    shopSale:0,
    totalSales:99
  },
  {
    key: "11",
    image:"http://img2.imgtn.bdimg.com/it/u=1191065506,1480274716&fm=26&gp=0.jpg",
    serviceName:"洗脚",
    price:"299",
    type: "高级服务",
    tags:["一般"],
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
