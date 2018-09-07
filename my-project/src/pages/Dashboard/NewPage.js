import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Card } from 'antd';

import styles from './NewPage.less';


@connect(({ chart, loading }) => ({
    chart,
    loading: loading.effects['chart/fetch'],
}))

class NewPage extends Component {

    render() {
        const element = (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        return (
            <Card>
                {element}
            </Card>
        );
    }
}

export default NewPage;
