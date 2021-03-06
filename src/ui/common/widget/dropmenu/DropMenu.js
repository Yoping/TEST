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
      data: {
        type: "",
        typelist: []
      },
      selectType: "",
      selectId: -1
    };
  }
  componentDidMount() {
    this.setState({
      data: mydata,
      selectType: "所有" + mydata.type,
      isListShow:false
    });
  }
  render() {
    const style=this.state.isListShow?"drop-menu-list list-show":"drop-menu-list list-hide";
    return (
      <div className="drop-menu">
        <div className="drop-menu-type">选择{this.state.data.type}:</div>
        <div>
          <div className="drop-menu-choice" onClick={()=>{this.changeStyle()}}>
            {this.state.selectType}{this.state.selectId}
            <img src="https://img.yzcdn.cn/upload_files/2017/04/06/FkzPke7UiK-QgqA0_KFby82u6KV7.png" />
          </div>
          <div className={style}>
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
      isListShow:false,
    });
  };
  changeStyle(){
    this.setState({
      isListShow:!this.state.isListShow,
    })
    console.log("isShow:"+this.state.isListShow);
  }
}

export default DropMenu;
