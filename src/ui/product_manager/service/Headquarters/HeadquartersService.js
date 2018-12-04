import React, { Component } from "react";
import "./HeadquartersService.css";
import DropMenu from "../../../common/widget/dropmenu/DropMenu";

class HeadquartersService extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }
  render() {
    return (
      <div>
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
          <DropMenu></DropMenu>
        </div>
      </div>
    );
  }
}

export default HeadquartersService;
