import React, { Component } from "react";
import "./HeadquartersService.css";
import DropMenu from "../../../common/widget/dropmenu2/DropMenu";
import ServiceList from "./ServiceList/ServiceList";
import AddProduct from "./AddProduct/AddProduct";
const stateListData = {
  type: "状态",
  typelist: [
    {
      id: 1,
      typename: "全部状态"
    },
    {
      id: 2,
      typename: "已上架"
    },
    {
      id: 3,
      typename: "未上架"
    }
  ]
};

const typeListData = {
  type: "分类",
  typelist: [
    {
      id: 1,
      typename: "高级服务"
    },
    {
      id: 2,
      typename: "特殊服务"
    },
    {
      id: 3,
      typename: "各种服务"
    }
  ]
};

const signListData = {
  type: "标签",
  typelist: [
    {
      id: 1,
      typename: "贵"
    },
    {
      id: 2,
      typename: "很贵"
    },
    {
      id: 3,
      typename: "非常贵"
    }
  ]
};

class HeadquartersService extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      stateList: stateListData,
      typeList: typeListData,
      signList: signListData
    };
  }
  render() {
    return (
        <div >
          <div className="action-line">
            <div className="action-type">
              <span className="action">添加服务</span>
              <span className="action">批量操作</span>
              <span className="action">管理分类</span>
              <span className="action">管理标签</span>
            </div>
            <div className="search-div">
              <div className="search-board">
                <img src="https://img.yzcdn.cn/upload_files/2017/04/06/FkzPke7UiK-QgqA0_KFby82u6KV7.png" />
                <input type="textt" defaultValue="请输入名称或者条形码" />
              </div>
              <div className="search-btn action">搜索</div>
            </div>
          </div>
          <div className="choice-line">
            <div className="dropmenu">
              <DropMenu typelist={this.state.stateList} />
            </div>
            <div className="dropmenu">
              <DropMenu typelist={this.state.typeList} />
            </div>
            <div className="dropmenu">
              <DropMenu typelist={this.state.signList} />
            </div>
          </div>
          <div>
            <ServiceList />
          </div>
          <AddProduct></AddProduct>
        </div>
      
    );
  }

  showAddServiceView() {}
}

export default HeadquartersService;
