import React, { Component } from "react";
import "./HeadquartersService.css";
import DropMenu from "../../../common/widget/dropmenu2/DropMenu";
import ServiceList from "./ServiceList/ServiceList";
import SearchBoard from "../../../common/widget/searchBoard/SearchBoard"
import AddService from "./AddService/AddService"

const shopListData = {
  type: "门店",
  typelist: [
    {
      id: 1,
      typename: "木屋烧烤"
    },
    {
      id: 2,
      typename: "叫只鸭子"
    },
    {
      id: 3,
      typename: "搞只鸡"
    }
  ]
};


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
  constructor(props) {
    super();
    this.state = {
      //是否为总部服务（或门店服务）
      isHeadquarters:props.isHeadquarters,

      // 显示哪个界面：0表示默认服务列表，1表示添加服务
      showViewIndex: 0,
      
      shopList: shopListData,
      stateList: stateListData,
      typeList: typeListData,
      signList: signListData
    };
    
  }
  render() {
    //控制显示哪个面板：0服务列表 1添加服务面板
    var hServiceDivStyle = "h-service-div";
    var hServiceAddService = "h-service-add-service";
    switch (this.state.showViewIndex) {
      case 0:
        hServiceDivStyle = hServiceDivStyle + " show";
        hServiceAddService = hServiceAddService + " hide";
        break;
      case 1:
        hServiceDivStyle = hServiceDivStyle + " hide";
        hServiceAddService = hServiceAddService + " show";
        break;
    }

    return (
      <div>
        <div className={hServiceDivStyle}>
          <div className="action-line">
            <div className={this.state.isHeadquarters?"action-type show":"action-type hide"}>
              <span className="btnBlue" onClick={this.showAddServiceView}>添加服务</span>
              <span className="btnBlueRound">批量操作</span>
              <span className="btnBlueRound">管理分类</span>
              <span className="btnBlueRound">管理标签</span>
            </div>
            <div className={this.state.isHeadquarters?"dropmenu hide":"dropmenu show"}>
              <DropMenu typelist={this.state.shopList} />
            </div>
            <SearchBoard></SearchBoard>
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
          <ServiceList />
        </div>
        <div className={hServiceAddService}>
          <AddService showServiceListView={this.showServiceListView}/>
        </div>
      </div>
    );
  }

  showAddServiceView=()=> {
    this.setState({
      showViewIndex:1
    });
  }
  showServiceListView=()=> {
    this.setState({
      showViewIndex:0
    });
  }
}

export default HeadquartersService;
