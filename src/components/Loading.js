import React from 'react'
// import {} from ''
// im
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;



export default function Loading() {
    return (
        <Spin indicator={antIcon} />
    )
}

// ReactDOM.render(<Spin indicator={antIcon} />, mountNode)