import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Card, Switch } from 'antd';

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
                            onChange={this.onSwitch}>
                        </Switch>
                    </span>
                    <span>
                        点击开关  {this.state.checked ? '显示' : '隐藏'}.
                    </span>
                </h2>


            </div>
        );
    }
}


class NewPage extends Component {
    render() {
        return (
            <Card>
                <Clock />
            </Card>
        );
    }
}

export default NewPage;
