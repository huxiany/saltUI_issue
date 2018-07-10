import { Component } from 'react';
import './PageHome.less';

import {TextField, Button, Toast, Group, Boxs, SwitchField, Field, TextareaField, DatetimeField } from 'saltui';
const HBox = Boxs.HBox;
const Box = Boxs.Box;


export default class PageHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryId: null,
      gradeId: null,
      quarryId: null,
      stockingAreaId: null,
      blockNumber: null,
      quarryReportedLength: null,
      quarryReportedWidth: null,
      quarryReportedHeight: null,
      validatedLength: null,
      validatedWidth: null,
      validatedHeight: null,
      quarryReportedVolume: 0,
      validatedVolume: 0,
      licensePlateNumber: null,
      notes: "",
      discarded: false,
      discardedReason: null,
      status: 10,
      price: null,
      totalAmount: null,
      purchaser: null,
      purchaseDate: null,
      normalImageNames: null,
      stockInTime: null,
      stockInOperator: null
    };
  }

  async componentDidMount() {
  }

  handleChange(label, value) {
    let props = ["status", "quarryId", "categoryId", "gradeId", "stockingAreaId", "purchaseDate", "stockInTime"];
    if (props.includes(label))
      value = value.value;
    this.setState({ [label]: value });
  }

  handleReturn() {
    this.props.history.goBack();
  }

  handleQuarryReportedLengthChange(value) {
    let s = this.state;
    if (s.quarryReportedLength === s.validatedLength)
      this.setState({ quarryReportedLength: value, validatedLength: value });
    else
      this.setState({ quarryReportedLength: value });
  }
  handleQuarryReportedWidthChange(value) {
    let s = this.state;
    if (s.quarryReportedWidth === s.validatedWidth)
      this.setState({ quarryReportedWidth: value, validatedWidth: value });
    else
      this.setState({ quarryReportedWidth: value });
  }
  handleQuarryReportedHeightChange(value) {
    let s = this.state;
    if (s.quarryReportedHeight === s.validatedHeight)
      this.setState({ quarryReportedHeight: value, validatedHeight: value });
    else
      this.setState({ quarryReportedHeight: value });
  }

  render() {
    let t = this;
    let s = t.state;
    let notes = '';
    let quarryReportedVolume = 0;
    let validatedVolume = 0;
    notes = s.notes === null ? '' : s.notes;

    return (
      <Group>
        <Group.Head>{'添加信息'}</Group.Head>
        <Group.List lineIndent={15}>
          <TextField label="编号" required={true} placeholder="请输入" value={s.blockNumber} onChange={t.handleChange.bind(t, "blockNumber")} />
          <TextField label="收方长度" required={true} placeholder="毫米" type="number" pattern="\d*" value={s.quarryReportedLength} onChange={t.handleQuarryReportedLengthChange.bind(t)} />
          <TextField label="收方高度" required={true} placeholder="毫米" type="number" pattern="\d*" value={s.quarryReportedHeight} onChange={t.handleQuarryReportedHeightChange.bind(t)} />
          <TextField label="收方宽度" required={true} placeholder="毫米" type="number" pattern="\d*" value={s.quarryReportedWidth} onChange={t.handleQuarryReportedWidthChange.bind(t)} />
          <Field label="收方体积">{quarryReportedVolume} 立方米</Field>
          <TextField label="总金额" placeholder="请输入" value={s.totalAmount} onChange={t.handleChange.bind(t, "totalAmount")} />
          <TextField label="收料人" placeholder="请输入" onChange={t.handleChange.bind(t, "purchaser")} value={s.purchaser} />
          <DatetimeField label="收料日期" placeholder="请选择" onSelect={t.handleChange.bind(t, 'purchaseDate')} value={s.purchaseDate} columns={DatetimeField.YMD} />
            <TextField label="入库长度" required={true} placeholder="毫米" type="number" pattern="\d*" value={s.validatedLength} onChange={t.handleChange.bind(t, "validatedLength")} /> 
            <TextField label="入库高度" required={true} placeholder="毫米" type="number" pattern="\d*" value={s.validatedHeight} onChange={t.handleChange.bind(t, "validatedHeight")} /> 
            <TextField label="入库宽度" required={true} placeholder="毫米" type="number" pattern="\d*" value={s.validatedWidth} onChange={t.handleChange.bind(t, "validatedWidth")} /> 
            <Field label="入库体积">{validatedVolume} 立方米</Field>
            <DatetimeField label="入库时间" required={true} placeholder="请选择" onSelect={t.handleChange.bind(t, 'stockInTime')} value={s.stockInTime} columns={DatetimeField.YMDHM} />
            <TextField label="入库负责人" required={true} placeholder="请输入" onChange={t.handleChange.bind(t, "stockInOperator")} value={s.stockInOperator} /> 
            <TextField label="车牌号" placeholder="请输入" value={s.licensePlateNumber} onChange={t.handleChange.bind(t, "licensePlateNumber")} /> 
          <SwitchField label="报废" on={s.discarded} onChange={t.handleChange.bind(t, "discarded")} />
          <TextField label="报废原因" required={true} placeholder="请输入" onChange={t.handleChange.bind(t, "discardedReason")} value={s.discardedReason} />
          <TextareaField label="备注" minRows={2} maxRows={3} placeholder="备注" value={notes} onChange={t.handleChange.bind(t, 'notes')} />
        </Group.List>
        <div className="actionBtnContainer">
          <HBox>
            <Box flex={1} className="t-PR8"><Button onClick={t.submitData.bind(t)}>提交</Button></Box>
            <Box flex={1} className="t-PR8"><Button onClick={t.handleReturn.bind(t)}>返回</Button></Box>
          </HBox>
        </div>
      </Group>
    );
  }

  submitData() {
    let t = this;
    let s = t.state;

    Toast.show({ type: 'Loading', content: '正在提交数据' });

  }

}