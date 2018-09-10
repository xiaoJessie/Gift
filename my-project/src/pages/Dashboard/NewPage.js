import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Card } from 'antd';

import styles from './NewPage.less';


@connect(({ chart, loading }) => ({
    chart,
    loading: loading.effects['chart/fetch'],
}))

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

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
