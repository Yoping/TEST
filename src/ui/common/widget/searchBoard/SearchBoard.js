import React, { Component } from "react";
import "./SearchBoard.css"

class SearchBoard extends Component {
  render() {
    return (
      <div className="search-board">
        <div className="search-div">
          <img src="https://img.yzcdn.cn/upload_files/2017/04/06/FkzPke7UiK-QgqA0_KFby82u6KV7.png" />
          <input type="textt" defaultValue="请输入名称或者条形码" />
        </div>
        <div className="search-btn btnGreyRound">搜索</div>
      </div>
    );
  }
}
export default SearchBoard;
