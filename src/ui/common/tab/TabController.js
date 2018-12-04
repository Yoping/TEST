import React, { Component } from "react";
import "./TabController.css";

function mapStateToProps(state) {
  return {};
}

class TabController extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    };
  }

  choose_title_item(index) {
    return index === this.state.currentIndex ? "tab-title active" : "tab-title";
  }
  choose_content_item(index) {
    return index === this.state.currentIndex
      ? "tab-content show"
      : "tab-content";
  }

  render() {
    return (
      <div className="main-frame">
        {/* tab 导航名称列表 */}
        <div className="tab-title-list">
          <div className="tab_title_header">
            <img className="header_avatar" src="https://img.yzcdn.cn/upload_files/2017/04/06/FkzPke7UiK-QgqA0_KFby82u6KV7.png"/>
            <div className="header_info">
              <div className="header_name">吃瓜美业</div>
              <div >
                <span className="header_auth btn">未认证</span>
                <span className="header_brand btn">有赞美业</span>
              </div>
            </div>
          </div>
          <div className="header-line"></div>
          <div>
            {React.Children.map(this.props.children, (element, index) => {
              return (
                <div
                  onClick={() => {
                    this.setState({ currentIndex: index });
                  }}
                  className={this.choose_title_item(index)}
                >
                  <img src="https://img.yzcdn.cn/upload_files/2017/04/06/FkzPke7UiK-QgqA0_KFby82u6KV7.png" />
                  <span>{element.props.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/* tab 内容区域列表 */}
        <div className="tab-content-list">
          {React.Children.map(this.props.children, (element, index) => {
            return (
              <div className={this.choose_content_item(index)}>{element}</div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TabController;
