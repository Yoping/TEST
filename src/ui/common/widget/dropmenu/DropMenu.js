import React, { Component } from "react";
import "./DropMenu.css";

const mydata={
    type:"服务种类",
    typelist:[{
        id:1,
        typename:"高级服务"
    },{
        id:2,
        typename:"特殊服务"
    },{
        id:3,
        typename:"各种服务"
    }]
}

class DropMenu extends Component {
  constructor(props) {
    super();
    this.state={
        data:{
            type:"",
            typelist:[]
        },
        selectItem:"",
        selectId:-1
    }
  }
  componentDidMount(){
      this.setState({
        data:mydata,
        selectItem:"所有"+mydata.type
      })
  }
  render() {
    return (
      <div className="drop-menu">
        <div className="drop-menu-type">选择{this.state.data.type}:</div>
        <div>
          <div className="drop-menu-choice">
            {this.state.selectItem}
            <img src="https://img.yzcdn.cn/upload_files/2017/04/06/FkzPke7UiK-QgqA0_KFby82u6KV7.png" />
          </div>
          <div className="drop-menu-list">
            {this.state.data.typelist.map((item,index) => {
              return <div key={item.id} className="drop-menu-item"
              onClick={this.onSelectItem(item.id,item.typename)}
              >{item.typename}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }

  onSelectItem=(selectId,selectTypename)=>{
    //   let {id,typename}={selectId,selectTypename};
    //   this.setState(
    //     {
    //         selectItem:id,
    //         selectId:typename
    //       }
    //   )
  }
}

export default DropMenu;
