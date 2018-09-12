import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Card, Switch } from 'antd';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import styles from './NewPage.less';


@connect(({ chart, loading }) => ({
    chart,
    loading: loading.effects['chart/fetch'],
}))

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), checked: true };
    }

    onSwitch = checked => {
        this.setState({
            checked
        });
    };

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h2 >
                    <span>
                        <Switch
                            checkedChildren={'on'}
                            unCheckedChildren={'off'}
                            defaultChecked
                            onChange={this.onSwitch} />
                    </span>
                    <span>
                        点击开关  {this.state.checked ? (
                            <p>显示 {this.state.date.toLocaleTimeString()}.</p>) : 'clock已隐藏'}
                    </span>
                </h2>


            </div>
        );
    }
}

class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }

        myChart.setOption({
            title: {
                text: '柱状图动画延迟'
            },
            legend: {
                data: ['bar', 'bar2'],
                align: 'left'
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: 'bar',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'bar2',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 800, height: 400 }}></div>
        );
    }
}

class NewPage extends Component {
    render() {
        return (
            <Card>
                <Clock />
                <EchartsTest />
            </Card>
        );
    }
}

export default NewPage;
