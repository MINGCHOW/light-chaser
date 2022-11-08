import React, {Component} from 'react';
import {Slider, Switch} from "antd";
import './style/AntdRadarSet.less';
import FillColor from "./atomic_components/FillColor";
import Legend from "./atomic_components/Legned";
import OutRadius from "./atomic_components/OutInnerRadius";
import StartEndAngle from "./atomic_components/StartEndAngle";
import {getAntdDataSortCount} from "../../../../utils/AntdBarUtil";
import RightAngleCoordinates from "./atomic_components/RightAngleCoordinates";
import ColorPicker from "../../../color_picker/BaseColorPicker";


interface AntdRadarSetProps {
    updateChartProps?: (data: any) => void;
    chartProps?: any;
    activated?: any;
}

export default class AntdRadarSet extends Component<AntdRadarSetProps> {

    state: any = {
        lineWidth: 1,
        pointSize: 1,
    }

    fillColorChanged = (color: string | string[]) => {
        const {updateChartProps} = this.props;
        updateChartProps && updateChartProps({color: color});
    }

    curveRendering = (data: boolean) => {
        const {updateChartProps} = this.props;
        updateChartProps && updateChartProps({
            smooth: data
        })
    }

    lineWidthChanged = (lineWidth: number) => {
        const {updateChartProps} = this.props;
        updateChartProps && updateChartProps({
            lineStyle: {
                lineWidth,
            },
        })
        this.setState({lineWidth});
    }

    pointColorChanged = (color: string) => {
        const {updateChartProps} = this.props;
        updateChartProps && updateChartProps({
            point: {
                color,
            },
        })
    }

    pointSizeChanged = (size: number) => {
        const {updateChartProps} = this.props;
        updateChartProps && updateChartProps({
            point: {
                size,
            },
        });
        this.setState({pointSize: size});
    }

    pointFillColorChanged = (color: string) => {
        const {updateChartProps} = this.props;
        updateChartProps && updateChartProps({
            point: {
                style: {
                    fill: color
                },
            },
        })
    }

    render() {
        const {lineWidth, pointSize} = this.state;
        const {updateChartProps, chartProps} = this.props;
        let paletteCount = getAntdDataSortCount(chartProps.data, 'type');
        return (
            <div className={'elem-chart-config'}>

                {/*图形填充色设置*/}
                <FillColor onChange={this.fillColorChanged} paletteCount={paletteCount}/>
                {/*图例*/}
                <Legend chartProps={chartProps} updateChartProps={updateChartProps}/>
                {/*极坐标系相关设置*/}
                <OutRadius items={['outer']} updateChartProps={updateChartProps}/>
                <StartEndAngle updateChartProps={updateChartProps}/>
                {/*是否曲线渲染*/}
                <div className={'config-group'}>
                    <div className={'lc-config-item'}>
                        <label className={'lc-config-item-label'}>曲线渲染：</label>
                        <div className={'lc-config-item-value'} style={{textAlign: 'right'}}><Switch
                            onChange={this.curveRendering}/></div>
                    </div>
                </div>
                {/*雷达图线宽*/}
                <div className={'config-group'}>
                    <div className={'lc-config-item'}>
                        <label className={'lc-config-item-label'}>雷达图描边线宽：</label>
                        <Slider defaultValue={lineWidth} value={lineWidth} max={10} min={0} step={0.1}
                                onChange={this.lineWidthChanged}
                                className={'lc-config-item-value'}/>
                    </div>
                </div>
                {/*描边虚线*/}
                <div className={'config-group'}>
                    <div className={'lc-config-item'}>
                        <label className={'lc-config-item-label'}>雷达图点描边颜色：</label>
                        <ColorPicker name={'mainTitleColor'}
                                     onChange={this.pointColorChanged}
                                     className={'lc-config-item-value'}/>
                    </div>
                </div>
                <div className={'config-group'}>
                    <div className={'lc-config-item'}>
                        <label className={'lc-config-item-label'}>雷达图点填充颜色：</label>
                        <ColorPicker name={'mainTitleColor'}
                                     onChange={this.pointFillColorChanged}
                                     className={'lc-config-item-value'}/>
                    </div>
                </div>
                <div className={'config-group'}>
                    <div className={'lc-config-item'}>
                        <label className={'lc-config-item-label'}>雷达图点大小：</label>
                        <Slider defaultValue={pointSize} value={pointSize} max={10} min={0} step={0.1}
                                onChange={this.pointSizeChanged}
                                className={'lc-config-item-value'}/>
                    </div>
                </div>

                {/*直角坐标系配置*/}
                <RightAngleCoordinates chartProps={chartProps} updateChartProps={updateChartProps}/>

            </div>
        );
    }
}
