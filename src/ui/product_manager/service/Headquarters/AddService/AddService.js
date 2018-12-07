import React, { Component } from "react";
import "./AddService.css";
import { Steps } from "antd";
import AddBasicInfo from "./addBasicInfo/AddBasicInfo";
import AddDetailInfo from "./addDetailInfo/AddDetailInfo";
import { Alert } from "zent";

const Step = Steps.Step;
class AddService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }
  render() {
    console.log("this.state.step:"+this.state.step);
    return (
      <div>
        <div>
          <Steps
            size="small"
            current={this.state.step}
            className="add-ser-step"
          >
            <Step title="添加服务" />
            <Step title="编辑基本信息" />
            <Step title="服务详情" />
          </Steps>
        </div>
        <div className={this.state.step == 1 ? "show" : "hide"}>
          <AddBasicInfo />
          <div>
            <span className="add-ser-btn btnBlue" onClick={this.goToStep.bind(this,2)}>
              下一步
            </span>
            <span className="add-ser-btn btnBlue" onClick={this.back}>
              取消
            </span>
          </div>
        </div>
        <div className={this.state.step == 2 ? "show" : "hide"}>
          <AddDetailInfo />
          <div>
            <span className="add-ser-btn btnBlue" onClick={this.goToStep.bind(this,1)}>
              上一步
            </span>
            <span className="add-ser-btn btnBlue" onClick={this.saveNewServer}>
              保存
            </span>
            <span className="add-ser-btn btnBlue">上架</span>
            <span className="add-ser-btn btnBlue">预览</span>
          </div>
        </div>
      </div>
    );
  }

  saveNewServer = () => {
    alert("保存成功！");
    this.props.showServiceListView();
  };

  //   返回，显示服务列表
  back = () => {
    this.props.showServiceListView();
  };

  goToStep = index => {
    console.log("go to step =" + index);
    this.setState({
      step:index
    });
  };
}
export default AddService;
