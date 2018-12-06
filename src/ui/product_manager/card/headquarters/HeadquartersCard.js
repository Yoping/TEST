import React, { Component } from "react";
import DropMenu from "../../../common/widget/dropmenu2/DropMenu";
import CardList from "./cardList/CardList"
import SearchBoard from "../../../common/widget/searchBoard/SearchBoard"
import "../../../common/widget/button/button.css"
import "./HeadquartersCard.css";
const cardListData = {
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


class HeadquartersCard extends Component {
  constructor(props) {
    super();
    this.state = {
      //是否为总部服务（或门店服务）
      isHeadquarters:props.isHeadquarters,

      // 显示哪个界面：0表示默认卡项列表，1表示添加卡项
      showViewIndex: 0,

      cardList:cardListData
      
    };
    
  }
  render() {
    //控制显示哪个面板：0卡项列表 1添加卡项面板
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
          <div className="card-action-line">
            <div className={this.state.isHeadquarters?"show":"hide"}>
              <span className="btnGreyRound" onClick={this.showAddServiceView}>添加卡项</span>
            </div>
            <div className={this.state.isHeadquarters?"hide":"show"}>
              <DropMenu typelist={this.state.cardList} />
            </div>
            <SearchBoard></SearchBoard>
          </div>
          <div className="card-type-line">
            <span className="btnGreyRound">卡类型</span>
            <span className="btnGreyRound">全部卡类</span>
            <span className="btnGreyRound">次卡</span>
            <span className="btnGreyRound">折扣卡</span>
            <span className="btnGreyRound">充值卡</span>
          </div>
          <CardList />
        </div>
        <div className={hServiceAddService}>
         添加卡项
        </div>
      </div>
    );
  }

  showAddServiceView=()=> {
    this.setState({
      showViewIndex:1
    });
  }
}

export default HeadquartersCard;
