import React, { Component } from "react";
import "./AddBasicInfo.css";

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  BackTop,
  Upload,
  Radio,
  Steps
} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const AutoCompleteOption = AutoComplete.Option;
const Step = Steps.Step;

class AddBasicInfo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="名称">
            {getFieldDecorator("name", {
              rules: [
                {
                  min: 2,
                  message: "服务名称至少两个字"
                },
                {
                  required: true,
                  message: "服务名称不能为空"
                }
              ]
            })(<Input className="add-s-input" placeholder="长度为2-30个字" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="条形码">
            {getFieldDecorator("barcode", {})(
              <Input
                className="add-ser-input"
                placeholder="14位以内的数字+英文（不区分大小写）"
              />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="分类"
            hasFeedback
            extra="一个商品对应一个分类，用于设置员工提成"
          >
            <Row gutter={0} style={{ width: 500 }}>
              <Col span={10}>
                {getFieldDecorator("type", {
                  rules: [{ required: true, message: "分类不能为空" }]
                })(
                  <Select placeholder="选择产品分类">
                    <Option value="fruit">水果</Option>
                    <Option value="e-product">电子产品</Option>
                  </Select>
                )}
              </Col>
              <Col span={10}>
                <span>管理产品分类</span>
              </Col>
            </Row>
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="图片"
            extra="最多可上传5张，建议尺寸 640 x 640px。"
            className="add-ser-item"
          >
            {getFieldDecorator("upload", {
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> 点击上传
                </Button>
              </Upload>
            )}
          </FormItem>
          {/* 服务没有单位，产品有单位 */}
          <FormItem {...formItemLayout} label="单位">
            {getFieldDecorator("unit", {
              rules: [{ required: true, message: "请选择产品单位" }]
            })(
              <Select
                placeholder="选择产品单位"
                onChange={this.handleSelectChange}
              >
                <Option value="male">个</Option>
                <Option value="female">件</Option>
                <Option value="female">包</Option>
                <Option value="female">只</Option>
                <Option value="female">套</Option>
                <Option value="female">条</Option>
                <Option value="female">张</Option>
                <Option value="female">对</Option>
              </Select>
            )}
          </FormItem>
          {/* 服务没有成本价，产品有成本价 */}
          <FormItem {...formItemLayout} label="成本价">
            {getFieldDecorator("madePrice", {})(
              <Input addonBefore={<span>￥</span>} style={{ width: "100%" }} />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="售价">
            {getFieldDecorator("price", {
              rules: [{ required: true, message: "产品售价不能为空" }]
            })(
              <Input addonBefore={<span>￥</span>} style={{ width: "100%" }} />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="价格标签"
            placeholder="原价：￥99.99"
          >
            {getFieldDecorator("priceTag", {})(
              <Input addonBefore={<span>￥</span>} style={{ width: "100%" }} />
            )}
          </FormItem>
          {/* 服务没有运费，产品有运费 */}
          <FormItem {...formItemLayout} label="运费">
            {getFieldDecorator("freight", {
              rules: [{ required: true, message: "运费不能为空" }]
            })(
              <Input addonBefore={<span>￥</span>} style={{ width: "100%" }} />
            )}
          </FormItem>
          {/* 服务有时长，产品没有 */}
          <FormItem {...formItemLayout} label="时长">
            {getFieldDecorator("costTime", {})(
              <Select defaultValue="60分钟" onChange={this.handleSelectChange}>
                <Option value="male">30分钟</Option>
                <Option value="female">120分钟</Option>
              </Select>
            )}
          </FormItem>
          {/* 服务有线上预约支付，产品没有 */}
          <FormItem {...formItemLayout} label="线上预约">
            {getFieldDecorator("needPayOnNet")(
              <RadioGroup defaultValue="payOnNetNo">
                <Radio value="payOnNetNo">无需支付</Radio>
                <Radio value="payOnNet">需支付</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="网店展示">
            {getFieldDecorator("isShowOnNet")(
              <RadioGroup defaultValue="showOnNet">
                <Radio value="showOnNet">展示</Radio>
                <Radio value="showOnNetNo">不展示</Radio>
              </RadioGroup>
            )}
          </FormItem>
        </Form>
      </div>
    );
  }
}
const WrappedRegistrationForm = Form.create()(AddBasicInfo);

export default WrappedRegistrationForm;
