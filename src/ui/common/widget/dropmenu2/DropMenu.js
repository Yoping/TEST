import React, { Component } from "react";
import "./DropMenu.css";

const mydata = {
  type: "服务种类",
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

class DropMenu extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.typelist,
      selectType: "所有"+props.typelist.type,
      selectId: -1,
      isShow:false,
    };
  }
  render() {
    return (
      <div className="drop-menu">
        <div className="drop-menu-type">选择{this.state.data.type}:</div>
        <div className="drop-menu-div">
          <div className="drop-menu-choice" >
            {this.state.selectType}
            <img src="https://img.yzcdn.cn/upload_files/2017/04/06/FkzPke7UiK-QgqA0_KFby82u6KV7.png" />
          </div>
          <div className={this.state.isShow?"drop-menu-list show":"drop-menu-list hide"}>
            {this.state.data.typelist.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="drop-menu-item"
                  onClick={()=>{this.onSelectItem(item.id, item.typename)}}
                >
                  {item.typename}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  onSelectItem = (selectId, selectType) => {
    this.setState({
      selectType: selectType,
      selectId: selectId,
      isShow:false,
    });
  };
}

export default DropMenu;
